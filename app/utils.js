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
        item.child_categories = filterByHomePageTopMenu(item.child_categories);
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
        item.child_categories = filterBySliderMenuView(item.child_categories);
      }
      return true;
    } else {
      return false;
    }
  });
};

//define meta data for product details page
export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
