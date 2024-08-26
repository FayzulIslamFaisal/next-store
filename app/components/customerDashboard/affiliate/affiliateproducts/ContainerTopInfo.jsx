const ContainerTopInfo = () => {
    return (
        <>
            <div className=" d-flex justify-content-between container-booking-section-headr flex-column flex-md-row gap-3 align-items-center">
                <div className="container-booking-banner">
                    <img src="/images/Contener.png" alt="hello" />
                </div>
                <div className="container-booking-section-headr-left">
                    <table>
                        <tbody>
                            <tr>
                                <td>Container Number</td>
                                <td className="px-5">:</td>
                                <td className="text-end">01</td>
                            </tr>
                            <tr>
                                <td>Container Valu</td>
                                <td className="px-5">:</td>
                                <td className="text-end">01 Crore</td>
                            </tr>
                            <tr>
                                <td>Item</td>
                                <td className="px-5">:</td>
                                <td className="text-end">....</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td className="px-5">:</td>
                                <td className="text-end">01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=" d-flex justify-content-between container-booking-date-section flex-column flex-md-row gap-2">
                <p className="">Open Date : 1 August 2024</p>
                <p className="">Close Date : 1 September 2024</p>
            </div>
        </>
    );
};

export default ContainerTopInfo;
