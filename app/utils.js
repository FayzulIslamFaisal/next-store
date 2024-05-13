export const filterByStatus = (arr) => {
    if (! Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter(item => {
        if (item.status === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterByStatus(item.child_categories);
            }
            return true;
        } else {
            return false;
        }
    });
}

export const filterByHomePageTopMenu = (arr) => {
    if (! Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter(item => {
        if (item.home_page_top_menu === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterByHomePageTopMenu(item.child_categories);
            }
            return true;
        } else {
            return false;
        }
    });
}

export const filterBySliderMenuView = (arr) => {
    if (! Array.isArray(arr) || arr.length < 1) {
        return [];
    }
    return arr.filter(item => {
        if (item.on_slider_menu_view === 1) {
            if (item.child_categories && item.child_categories.length > 0) {
                item.child_categories = filterBySliderMenuView(item.child_categories);
            }
            return true;
        } else {
            return false;
        }
    });
}
