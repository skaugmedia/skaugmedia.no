import { oneLine } from "common-tags";
import famE1 from "../../../Images/Family/fam_e_1.jpg";
import famE2 from "../../../Images/Family/fam_e_2.jpg";
import famE3 from "../../../Images/Family/fam_e_3.jpg";
import famE4 from "../../../Images/Family/fam_e_4.jpg";
import famE5 from "../../../Images/Family/fam_e_5.jpg";
import famE6 from "../../../Images/Family/fam_e_6.jpg";
import famE7 from "../../../Images/Family/fam_e_7.jpg";
import famE8 from "../../../Images/Family/fam_e_8.jpg";
import famE9 from "../../../Images/Family/fam_e_9.jpg";
import famH1 from "../../../Images/Family/fam_h_1.jpg";
import famH2 from "../../../Images/Family/fam_h_2.jpg";
import famH3 from "../../../Images/Family/fam_h_3.jpg";
import famH4 from "../../../Images/Family/fam_h_4.jpg";
import famH5 from "../../../Images/Family/fam_h_5.jpg";
import famH6 from "../../../Images/Family/fam_h_6.jpg";
import famL1 from "../../../Images/Family/fam_l_1.jpg";
import famL10 from "../../../Images/Family/fam_l_10.jpg";
import famL11 from "../../../Images/Family/fam_l_11.jpg";
import famL2 from "../../../Images/Family/fam_l_2.jpg";
import famL3 from "../../../Images/Family/fam_l_3.jpg";
import famL4 from "../../../Images/Family/fam_l_4.jpg";
import famL5 from "../../../Images/Family/fam_l_5.jpg";
import famL6 from "../../../Images/Family/fam_l_6.jpg";
import famL7 from "../../../Images/Family/fam_l_7.jpg";
import famL8 from "../../../Images/Family/fam_l_8.jpg";
import famL9 from "../../../Images/Family/fam_l_9.jpg";
import FamilyRoute from "../../../Routes/Family/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "familie",
  title: "Familie",

  body: oneLine`
    Familiebilder er så koselig å ha for å se tilbake på når barna har vokst opp, og flyttet ut,
    eller når de vi er så glade i, ikke lenger er her med oss!
  `,
  cover: {
    url: famE1,
    title: "Familietid i skogen",
  },
  listing: {
    title: "Familiefotografering",
    price: priceList.family,
    link: `/${PricesRoute}/${FamilyRoute}`,
  },
  shoots: [
    {
      description: "Familien H",
      tags: ["familie", "skog", "høst"],
      images: [
        {
          url: famH3,
          title: "Familien H",
          width: 1000,
          height: 667,
        },
        {
          url: famH1,
          title: "Familien H",
          width: 667,
          height: 1000,
        },
        {
          url: famH2,
          title: "Familien H",
          width: 667,
          height: 1000,
        },

        {
          url: famH4,
          title: "Familien H",
          width: 667,
          height: 1000,
        },

        {
          url: famH5,
          title: "Familien H",
          width: 1000,
          height: 667,
        },
        {
          url: famH6,
          title: "Familien H",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-09-08",
    },
    {
      description: "Familietid i skogen",
      tags: ["familie", "skog", "sommer"],
      images: [
        {
          url: famE1,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE2,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },

        {
          url: famE3,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },
        {
          url: famE4,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },

        {
          url: famE5,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },
        {
          url: famE6,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE7,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },

        {
          url: famE8,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE9,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-06-23",
    },

    {
      description: "Familietid i snøen",
      tags: ["familie", "snø"],
      images: [
        {
          url: famL1,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: famL2,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL3,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL4,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL5,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL6,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL7,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL8,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL9,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL10,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: famL11,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-19",
    },
  ],
};
