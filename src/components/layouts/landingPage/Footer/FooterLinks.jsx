import NavOption from "../../../atoms/NavOption";
import React from "react";


export default function FooterLinks() {
    return <div>
        <div>
            <NavOption href="#" color="BRAND_WHITE" width="30%" fontSize="xSmall">
                Events
            </NavOption>
        </div>
        <div>
            <NavOption href="#" color="BRAND_WHITE" width="30%" fontSize="xSmall">
                Programmes
            </NavOption>
        </div>

        <div>
            <NavOption href="http://google.com" color="BRAND_WHITE" width="30%" fontSize="xSmall">
                Blog
            </NavOption>
        </div>


    </div>;
}
