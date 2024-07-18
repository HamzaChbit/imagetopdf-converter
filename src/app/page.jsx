


import { Suspense } from 'react';
import Hero from '../components/Hero'
export default  function Home() {

  return (
    <div className="container mx-auto ">
     <div className='flex justify-center items-center '>
          <h2 className='text-3xl font-medium py-4 px-2 my-8'>Convert images to PDF?</h2>
        </div>
      {/* <div className="py-4 flex md:flex-row flex-col justify-center border-2 my-8">
      
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
      </div> */}
<Suspense>


  <Hero/>
</Suspense>










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
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22ZM5.25 14.5C5.25 14.0858 5.58579 13.75 6 13.75H14C14.4142 13.75 14.75 14.0858 14.75 14.5C14.75 14.9142 14.4142 15.25 14 15.25H6C5.58579 15.25 5.25 14.9142 5.25 14.5ZM5.25 18C5.25 17.5858 5.58579 17.25 6 17.25H11.5C11.9142 17.25 12.25 17.5858 12.25 18C12.25 18.4142 11.9142 18.75 11.5 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18Z" fill="#1C274C"></path> <path d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z" fill="#1C274C"></path> </g></svg>
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
  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>

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
