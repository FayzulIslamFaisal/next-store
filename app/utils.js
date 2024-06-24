export const filterByStatus = (arr) => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter((item) => {
        if (item.status === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterByStatus(item.child_categories);
            }
            return true;
        } else {
            return false;
        }
    });
};

export const filterByHomePageTopMenu = (arr) => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter((item) => {
        if (item.home_page_top_menu === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterByHomePageTopMenu(
                    item.child_categories
                );
            }
            return true;
        } else {
            return false;
        }
    });
};

export const filterBySliderMenuView = (arr) => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter((item) => {
        if (item.on_slider_menu_view === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterBySliderMenuView(
                    item.child_categories
                );
            }
            return true;
        } else {
            return false;
        }
    });
};

//define meta data for product details page
export const productDetailsPageMetaDataHandler = (productInfo) => {
    return {
        openGraph: {
            title: productInfo?.product_name,
            description: productInfo?.Short_description,
            url: "https://nagadhat.com.bd/",
            siteName: "nagadhat.com.bd",
            images: [
                {
                    url: `${NagadhatPublicUrl}/${productInfo?.product_thumbnail}`, // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
                {
                    url: `${NagadhatPublicUrl}/${productInfo?.product_thumbnail}`, // Must be an absolute URL
                    width: 1800,
                    height: 1600,
                    alt: "My custom alt",
                },
            ],
            locale: "en_US",
            type: "website",
        },
    };
};

// check the name is existing this array
export const existingIndex = (arr, name) => {
    return arr?.findIndex((item) => item.name === name);
};

//* Shortens a string to a specified length.
export function shortenString(str, length) {
    if (typeof str !== "string" || typeof length !== "number") {
        console.log(
            "Invalid input: First argument must be a string and second argument must be a number."
        );
    }

    if (length <= 0) {
        return "";
    }

    if (str.length <= length) {
        return str;
    }

    return str.slice(0, length) + "...";
}

// This function set recent view product

export function storeProduct(product) {
    if (typeof localStorage === "undefined") {
        return; // Local storage not available
    }

    let storedProducts =
        JSON.parse(localStorage.getItem("recentlyViewProducts")) || [];
    // Check if product already exists (by id)
    const existingProductIndex = storedProducts.findIndex(
        (p) => p.id === product.id && p.outlet_id === product.outlet_id
    );

    if (existingProductIndex === -1) {
        // If product is unique, add it to the end of the array
        storedProducts = [product, ...storedProducts];
        // Limit array size to 10
        if (storedProducts.length > 10) {
            storedProducts.pop(); // Remove the last element (oldest)
        }
    } else {
        // If product exists, remove it from the array
        storedProducts.splice(existingProductIndex, 1);
        // Add the updated product to the beginning of the array
        storedProducts = [product, ...storedProducts];
    }

    // Update localStorage with the modified array
    localStorage.setItem(
        "recentlyViewProducts",
        JSON.stringify(storedProducts)
    );
}

export function recentViewProductList() {
    if (typeof localStorage === "undefined") {
        return; // Local storage not available
    }
    const product =
        JSON.parse(localStorage.getItem("recentlyViewProducts")) || [];
    return product;
}

export const apiBaseUrl = "https://v3.nagadhat.com/api";
export const NagadhatPublicUrl = "https://v3.nagadhat.com";
