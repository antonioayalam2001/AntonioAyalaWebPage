export const ServiceCard = ({ id, name, icon, style = "", extraStyles = "", extraClassName = "" }) => {
    return (
        <div className={`${extraClassName} transition-all border-2 border-secondary rounded-lg py-4 shadow-lg hover:${style !== "" ? 'shadow-red' : 'shadow-golden'} w-[70%] ss:w-[50%] sm:w-[60%] ${style} ${extraStyles}`}>

            <div className={`text-white flex flex-col justify-center items-center`}>
                {style !== ""
                    ? <img className={`w-[50px]`} src={icon} alt={name} />
                    : <img className={`w-[110px]`} src={icon} alt={name} />
                }

                <h4 className={'font-glory font-bold py-5'}>{name}</h4>

            </div>


        </div>
    );
}