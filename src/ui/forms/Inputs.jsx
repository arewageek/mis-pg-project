export const TextInput = ({ type, placeholder, moreClasses }) => {
    
    return (
        <div className="w-full px-3 py-5">
            <div className='bg-gray-800 rounded-lg border-gray-600 border-2 shadow flex'>
                <span className='flex justify-center items-center h-auto text-sm px-3 bg-gray-900 rounded-l-lg'>
                    Icon
                </span>
                <input type={type} placeholder={placeholder} className={`${moreClasses} w-full px-3 py-2 bg-transparent`} />
            </div>
        </div>
    )
}


export const Dropdown = ({ options, moreClasses }) => {
    return (
        <div className="w-full px-3 py-2">
            <select className={`${moreClasses} w-full px-3 py-2 rounded-lg`}>
                { 
                    options.map(option => {
                        <option value={option.value}>
                            { option.label }
                        </option>
                    }) 
                }
            </select>
        </div>
    )
}