import React from "react";
import Banner from "../../Banner/Banner";
import Rate from "../../Rate/Rate";



const Mainpage = () => {
    return (
        <div>
            <Banner />
            <div className="container">
                <main>
                    <Rate />
                </main>
            </div>
        </div>
    );
}
export default Mainpage