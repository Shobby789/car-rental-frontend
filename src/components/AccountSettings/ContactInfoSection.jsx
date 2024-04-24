import React from 'react'

const ContactInfoSection = () => {
  return (
    <div className='rounded-xl w-4/5 flex flex-col gap-y-4'>
      <h5 className="text-2xl font-medium">Contact info</h5>
      <div className="border rounded-xl w-full p-6 flex flex-col gap-y-6">
        <h5 className="text-xl font-medium">Account</h5>
        <div className="flex flex-col gap-y-2">
            <p className="text-md font-medium">User ID</p>
            <p className="text-md font-medium">121212</p>
        </div>
        <div className="flex flex-col gap-y-2">
            <p className="text-md font-medium">Name</p>
            <p className="text-md font-medium">Shoaib Muhammad</p>
        </div>
        <div className="flex flex-col gap-y-2">
            <p className="text-md font-medium">Email</p>
            <p className="text-md font-medium">s******1@gmail.com</p>
        </div>
        <div className="">
            <button className="text-md font-medium text-red-700">Close my account</button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoSection
