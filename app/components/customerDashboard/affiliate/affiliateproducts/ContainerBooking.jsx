"use client";
import { getAffiliateContainer } from "@/app/services/affiliate/affiliateproducts/getAffiliateContainer";
import ContainerBookingProduct from "./ContainerBookingProduct";
import ContainerOrderDetails from "./ContainerOrderDetails";
import ContainerTopInfo from "./ContainerTopInfo";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";
import DefaultLoader from "@/app/components/defaultloader/DefaultLoader";

const ContainerBooking = ({ isActive }) => {
    const [containerData, setContainerData] = useState({});
    const [containerProduct, setContainerProduct] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchRetailProducts = async () => {
            try {
                const containerResponse = await getAffiliateContainer(
                    session.accessToken
                );
                if (containerResponse.code === 200) {
                    setContainerData(containerResponse.results);
                    setContainerProduct(containerResponse?.results?.products);
                } else {
                    console.log(containerResponse.message);
                }
            } catch (error) {
                console.error("Failed to fetch container data:", error);
            }
        };
        fetchRetailProducts();
    }, [session]);

    const availableQuantity = containerData?.quantity - containerData?.booked_quantity;
    const availableValue = containerData?.container_value - containerData?.booked_value;
    const progressBarValue = containerData?.progress_bar_value;

    return (
        <>
            <div
                className={`tab-pane fade ${isActive ? "show active" : ""}`}
                id="container-booking"
                role="tabpanel"
            >
                <Suspense fallback={<DefaultLoader />}>
                    <ContainerTopInfo containerData={containerData} />
                    <ContainerBookingProduct
                        containerProduct={containerProduct}
                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                        containerId={containerData.id}
                        progressBarValue={progressBarValue}
                    />

                    <ContainerOrderDetails
                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                        availableQuantity={availableQuantity}
                        availableValue={availableValue}
                        session={session}
                    />
                </Suspense>
            </div>
        </>
    );
};

export default ContainerBooking;
