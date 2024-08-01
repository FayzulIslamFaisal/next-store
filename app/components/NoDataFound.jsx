import Image from 'next/image'

export default function NoDataFound({title, description, image = true, imageUrl }) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column gap-3 p-5'>
            <div>
                {image &&
                    <Image 
                    src= {imageUrl?imageUrl:"/images/not-found.png"} 
                    height={100}
                    width={120}
                    alt="Not found" 
                    />
                }
            </div>
            <div className="text-center">
                <h2 className='fw-medium'>{title?title:"No Data Found"}</h2>
                <p>{description?description:"Could not find requested resource"}</p>
            </div>
        </div>
    )
}