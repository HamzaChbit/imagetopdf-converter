"use client"
import { useState, useEffect } from 'react';
function Hero() {
    const [imageFiles, setImageFiles] = useState([]);
    const [pdfDownloadLink, setPdfDownloadLink] = useState('');
    const [isConverting, setIsConverting] = useState(false);
  
    // Function to load image as base64 data url
    const loadImage = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject; // Handle FileReader errors
      });
    };
  
    // Function to render the images in the UI
    const renderImages = () => {
      return imageFiles.map((item, index) => (
        <div key={index} className="imageBox">
          <img src={item.previewUrl} alt={`Image ${index}`} />
          <button className="deleteButton" onClick={() => deleteImage(index)}>
            &times;
          </button>
        </div>
      ));
    };
  
    // Function to delete an image from imageFiles
    const deleteImage = (index) => {
      const updatedImages = [...imageFiles];
      updatedImages.splice(index, 1);
      setImageFiles(updatedImages);
    };
  
    // Function to handle the conversion process
    const convertToPdf = async () => {
      setIsConverting(true);
  
      try {
        const { default: jsPDF } = await import('jspdf');
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth() - 20;
  
        for (let i = 0; i < imageFiles.length; i++) {
          const imageData = await loadImage(imageFiles[i].file);
          doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, 0);
          if (i !== imageFiles.length - 1) {
            doc.addPage();
          }
        }
  
        doc.save('converted.pdf');
        setPdfDownloadLink(doc.output('bloburl'));
      } catch (error) {
        console.error('Error converting images to PDF:', error);
        // Handle error: Show a message to the user
      } finally {
        setIsConverting(false);
      }
    };
  
    // Event listener for file input change
    const handleFileInputChange = async (e) => {
      const selectedFiles = Array.from(e.target.files);
      const filesWithPreviews = await Promise.all(selectedFiles.map(async (file) => ({
        file,
        previewUrl: await loadImage(file),
      })));
      setImageFiles((prevFiles) => [...prevFiles, ...filesWithPreviews]);
    };
  
    // Disable the convert button if no images are added
    const disableConvertButton = imageFiles.length === 0;
  
    useEffect(() => {
      renderImages();
    }, [imageFiles]);
  return (
    <div>  <div className="py-4 flex md:flex-row flex-col justify-center border-2 my-8">
      
    <input type="file" id="fileInput" multiple onChange={handleFileInputChange} />
    <button
      style={{ '--clr': '#008cba', '--hov': '#006080' }}
      onClick={() => document.getElementById('fileInput').click()}
    >
      Add Images
    </button>
    <button
      style={{ '--clr': '#3e8d75', '--hov': '#3e8e41' }}
      onClick={convertToPdf}
      disabled={disableConvertButton || isConverting}
    >
      {isConverting ? 'Converting...' : 'Convert to PDF'}
    </button>
    <button
      style={{ '--clr': '#f44336', '--hov': '#ff6b6b' }}
      onClick={() => setImageFiles([])}
    >
      Clear Images
    </button>
  </div>
  <div id="pdfDownloadLink">
    {pdfDownloadLink && <a href={pdfDownloadLink}>Download PDF</a>}
  </div>
  <div id="imageContainer" className="h-[50vh]">
    {renderImages()}
  </div></div>
  )
}

export default Hero