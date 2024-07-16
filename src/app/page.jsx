"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
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
      const jsPDF = (await import('jspdf')).default; // Lazy load jsPDF on the client-side
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth() - 20;

      for (let i = 0; i < imageFiles.length; i++) {
        const imageData = await loadImage(imageFiles[i].file);
        doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, 0); // Adjust as needed
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
    <div className="container mx-auto ">
     <div className='flex justify-center items-center '>
          <h1 className='text-3xl font-medium py-4 px-2 my-8'>Convert images to PDF?</h1>
        </div>
      <div className="py-4 flex md:flex-row flex-col justify-center border-2 my-8">
      
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
      </div>

      <div className=" flex md:flex-row flex-col  space-y-4 font-medium justify-around items-center p-4 m-2  ">
        <div>
          <h3 className="text-3xl py-4 gap-2 font-bold">How to convert images to PDF?</h3>
          <h4 className='py-2'>
            1: How do I add images?
            <br />
            A: Click on the &quot; Add Images &quot; button and select one or more images from your device.
          </h4>
          <h4 className='py-2'>
            2: Can I remove images before converting?
            <br />
            A: Yes, click the delete icon (X) on the image preview to remove any unwanted images.
          </h4>
          <h4 className='py-2'>
            3: How do I download the PDF?
            <br />
            A: After conversion, click the &quot;Download PDF&quot; link below the image preview area.
          </h4>
          <h4 className='py-2'>
            4: What if I want to start over?
            <br />
            A: Click the &quot;Clear Images&quot; button to remove all selected images.
          </h4>
          <h3>Usage Tips</h3>
          <h4 className='py-2'>
            - Make sure to select high-quality images for better PDF output.
            <br />
            - Use the clear button to remove all images if needed before starting a new conversion.
          </h4>
        </div>
        <div className=" w-[300px] h-[300px]">
          <Image src='/file.png ' width={400} height={400} alt='file' title='file'/>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col1  space-y-4 justify-around items-center py-4 my-2 mx-4 font-normal md:h-[60vh] h-auto ">
        <div>
     <p className='space-y-4 '>
     Using free tool images to PDF converter tool you can easily convert image to PDF. This tool is very fast and easy to transform from images to PDF easily. This is free and easy to convert from image to PDF file using images to PDF tool.

You can easily convert from images to PDF format using this online free images to PDF tool. It is very fast to convert into PDF format in just seconds on this tool. Just select an image or images that you want to convert into PDF format. After selecting all the images, this tool will automatically convert all the images into PDF format and then display the download button on each PDFs below. Also, you can see the download zip button for the download zip file. There are also lots of features available which you can use. Like you can rotate images, set margin, page size, orientation, and more. So, you can easily transform from image to PDF using these online images to PDF tools and convert any type of images into PDF format.
     </p>
      
        </div>
      
      </div>

      <div className="container py-7  md:h-[60vh] h-auto ">
  <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>

  <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="font-medium">What are the steps to convert image to PDF file?</h2>
      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-700">
      Converting images to PDF involves loading the images, arranging them within a PDF document,
      and saving the PDF file. You can convert multiple image files into a single PDF document by
      iterating over each image and adding it to the PDF pages.
    </p>
  </details>

  <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="font-medium">Can I convert image to PDF without losing quality?</h2>
      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-700">
      Yes, it is possible to maintain the original image quality while converting to PDF by using
      high-resolution images and ensuring proper scaling within the PDF document.
    </p>
  </details>

  <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="font-medium">Can I adjust the page settings in the PDF, such as page size and margins?</h2>
      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-700">
      Yes, you can adjust page settings such as page size and margins while creating the PDF
      document. This allows customization according to your specific requirements.
    </p>
  </details>


</div>



    </div>
  );
}
