// import React from 'react'

// const Icon = ({icon: Icon , text, img}) => {
//   return (
//     <div className='group relative flex justify-center items-center'>
//                         <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-2 '>
//                             <Icon className='scale-[2]'/>
//                             <img src={img} />
//                         </div>
//                         <span className='absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 '>{text}</span>
                        
//                     </div>
//   )
// }

// export default Icon

// import React from 'react'

const Icon = ({ icon: Icon, text, img }) => {
  return (
    <div className="group relative flex justify-center items-center">
      
      <div className="bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-2">

        {Icon && (
          <Icon size={28} />
        )}

        {img && (
          <img
            src={img}
            alt={text}
            className="w-7 h-7 object-contain"
          />
        )}

      </div>

      <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {text}
      </span>

    </div>
  )
}

export default Icon

