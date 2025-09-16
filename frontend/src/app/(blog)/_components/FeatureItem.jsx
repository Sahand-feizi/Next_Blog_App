const colors = {
    purple: 'bg-purple-300 text-purple-600/80',
    green: 'bg-green-300 text-green-600/80',
    red: 'bg-red-300 text-red-600/80',
    primary: 'bg-primary-600 text-primary-900',
    secondary: 'bg-gray-300 text-gray-600/80',
    orange: 'bg-orange-300 text-orange-600/80'
}

function FeatureItem({ icon, title, description, color }) {
    return (
        <div className='p-3 col-span-12 sm:col-span-6 md:col-span-4 grid 
        grid-cols-[2rem_1fr] sm:grid-cols-[2.5rem_1fr] gap-2 
        bg-secondary-800/90 rounded-lg text-right'>
            <div className={`h-[2rem] sm:h-[2.5rem] flex items-center justify-center 
            rounded-xl ${colors[color]} sm:text-2xl text-xl`}>
                {icon}
            </div>
            <div className="space-y-2">
                <h3 className='text-secondary-0 font-bold text-base xl:text-lg'>{title}</h3>
                <p className='lg:text-sm text-xs text-secondary-300 font-thin'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureItem