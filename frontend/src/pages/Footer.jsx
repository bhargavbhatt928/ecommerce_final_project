

const Footer = () => {
    return (
        <div className="bg-black opacity-60 w-full items-center justify-center flex flex-col">
       <table className=" text-white w-4/5">
         <thead className="text-3xl">
            <tr className="text-center mb-6">
                <th>Women</th>
                <th>Men</th>
                <th>Kids</th>
                <th>Links</th>
            </tr>
         </thead>
         <tbody className="text-center">
            <tr>
                <td>Dress</td>
                <td>Shirts</td>
                <td></td>
                <td>Home</td>
            </tr>
            <tr>
                <td>Pants</td>
                <td>Pants</td>
                <td></td>
                <td>LogIn</td>
            </tr>
            <tr>
                <td>Skirts</td>
                <td>Hoodies</td>
                <td></td>
                <td>Contact</td>
            </tr>
         </tbody>
        </table>
         <hr className="w-4/5 border-2 border-sky-900  mt-4"/>
         <span className="text-white mb-2 mt-2">Copyright @Ecommerce 2023-2024</span>
        </div>
 
    );
}

export default Footer;
