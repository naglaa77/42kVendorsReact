import { JsonForms } from "@jsonforms/react";
import { materialRenderers, materialCells } from "@jsonforms/material-renderers";
import schema from './schema.json';
import uischema from './uischema.json';
import nameVendorTester from "./tester/nameVendorTester.js";
import NameVendor from "./components/NameVendor.jsx";
import CommercialName from "./components/CommercialName.jsx";
import commercialNameTester from "./tester/commercialNameTester.js";
import headquarterAddressTester from "./tester/headquarterAddressTester.js";
import HeadquarterAddress from "./components/HeadquarterAddress.jsx";
import {useMemo, useState} from "react";
import websiteTester from "./tester/WebsiteTester.js";
import Website from "./components/Website.jsx";
import sizeOfCompanyTester from "./tester/sizeOfCompanyTester.js";
import SizeOfCompany from "./components/SizeOfCompany.jsx";
import Logo from "./components/Logo.jsx";
import logoTester from "./tester/logoTester.js";
import emailTester from "./tester/emailTester.js";
import Email from "./components/Email.jsx";
import phoneNumberTester from "./tester/phoneNumberTester.js";
import PhoneNumber from "./components/PhoneNumber.jsx";
import ajv from './validators/customFormats';
import linkedinProfileTester from "./tester/LinkedinProfileTester.js";
import LinkedinProfile from "./components/LinkedInProfile.jsx";
import effectiveControlTester from "./tester/effectiveControlTester.js";
import EffectiveControl from "./components/EffectiveControl.jsx";
import {Box, Button} from "@mui/material";
import CustomTextarea from "./components/CustomTextarea.jsx";
import customTextareTester from "./tester/customTextareTester.js";
import shortTextTester from "./tester/shortTextTester.js";
import ShortText from "./components/ShortText.jsx";
import C01 from "./components/C01.jsx";
import c01Tester from "./tester/c01Tester.js";
import c02Tester from "./tester/c02Tester.js";
import C02 from "./components/C02.jsx";
import c03Tester from "./tester/c03Tester.js";
import C03 from "./components/C03.jsx";
import c04Tester from "./tester/c04Tester.js";
import C04 from "./components/C04.jsx";



const initialData = {
    name: "",
    commercialName: "",
    headquarterAddress: "",
    website: "",
    sizeOfCompany: "",
    logo: "",
    email: "",
    phoneNumber: "",
    effectiveControl: "no",
    group: {
        groupInputField: "",
        commercialNameGroup: "",
        address: "",
        websiteGroup: "",
        sizeofGroup: "",
        emailGroup: "",
        phoneNumberGroup: ""
    },
    influence: {
        "c01": {
            qV: "In which country is the VENDOR's registered head office is established?",
            qU: "Head office registered in:",
            typ: "uniqCountryCtrl",
            cV: "",
            v: "1.0",
            pt: "5"
        },
        "c02": {
            qV: ": if applicable precise State(s)",
            qU: "State(s)",
            typ: "shorttext",
            cV: "",
            v: "1.0",
            pt: "0"
        },
        c03: {
            qV: "In which other countries are the VENDOR's strategic decision centers located?",
            qU: "Strategic decision centers in:",
            typ: "country list with multiple choices",
            cV: [],
            v: "1.0",
            pt: "5"
        },
        c04: {
            qV: "Is the VENDOR quoted on a stock exchange?",
            qU: "Quoted on a stock exchange",
            typ: "yesno",
            cV: "",
            v: "1.0",
            pt: "5"
        }
    }
};

const renderers = [
    ...materialRenderers,
    { tester: nameVendorTester, renderer: NameVendor },
    {tester: commercialNameTester, renderer: CommercialName },
    {tester: headquarterAddressTester, renderer: HeadquarterAddress },
    {tester: websiteTester, renderer: Website},
    {tester: sizeOfCompanyTester, renderer: SizeOfCompany},
    { tester: logoTester, renderer: Logo },
    { tester: emailTester, renderer: Email },
    { tester: phoneNumberTester, renderer: PhoneNumber },
    { tester: linkedinProfileTester, renderer: LinkedinProfile },
    { tester: effectiveControlTester, renderer: EffectiveControl },
    { tester: customTextareTester, renderer: CustomTextarea },
    { tester: shortTextTester, renderer: ShortText },
     { tester: c01Tester, renderer: C01 },
    { tester: c02Tester, renderer: C02 },
    { tester: c03Tester, renderer: C03 },
    { tester: c04Tester, renderer: C04 },

];

const App = () => {
    const [data, setData] = useState(initialData);
    const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

    console.log("data", data);

    //add a database to save the data
    const handleSave = () => {
        console.log("Save data:", data);

    };

    //return to state before the change
    const handleCancel = () => {
        setData(prevData => ({ ...prevData }));
    };

    //delete current data and return to previous page
    const handleReturn = () => {
        setData(initialData);
        console.log("Return to previous page");

    };

    return (
        <div style={{maxWidth: '72rem', margin: '0 auto', marginBottom: "5rem"}}>
            <h1>Vendor Form</h1>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={renderers}
                cells={materialCells}
                ajv={ajv}
                onChange={({data}) => setData(data)}
            />

            <Box display="flex" justifyContent="center" marginTop="2rem" gap="1rem">
                <Button variant="contained" color="primary" onClick={handleSave} style={{ width: '200px' }}>
                    Save
                </Button>
                <Button variant="contained" color="secondary" onClick={handleCancel} style={{ width: '200px' }}>
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleReturn} style={{ width: '200px' }}>
                    Discard all change
                </Button>
            </Box>
            <pre>{stringifiedData}</pre>
        </div>
    );
};

export default App;