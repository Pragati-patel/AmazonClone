export default function MegaMenu() {
    const megaMenuList = ['Amazon Home','Kitchen & Home Appliances', 'Large Appliances', 'Kitchen & Dining', 'Furniture', 'Home Furnishing', 'Home Decor', 'Home improvement', 'Garden & Outdoor', 'Storage & organisaton', 'Lighting']
    return (
        <div className="flex justify-evenly items-center w-full" style={{boxShadow:"0 0 1px #ddd"}}>
            <ul className="flex justify-evenly w-full">
                {megaMenuList.map((i)=>{
                    return <li className="p-3 list-none text-12px font-AmazonEmberMedium" style={{color:"#333"}}>{i}</li>
                })}
            </ul>
        </div>
    )
}