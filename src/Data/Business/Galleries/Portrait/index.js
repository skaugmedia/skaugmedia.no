import lashbrowser_port from "../../../../Images/BusinessPortrait/lashbrowser_portrett.jpg";
import pentogbrukt_port from "../../../../Images/BusinessPortrait/pentogbrukt_portrett.jpg";
import stranger_port from "../../../../Images/BusinessPortrait/stranger_portrett.jpg";
import teamhelse_1_port from "../../../../Images/BusinessPortrait/teamhelse_1.jpg";
import teamhelse_2_port from "../../../../Images/BusinessPortrait/teamhelse_2.jpg";
import teamhelse_3_port from "../../../../Images/BusinessPortrait/teamhelse_3.jpg";
import teamhelse_4_port from "../../../../Images/BusinessPortrait/teamhelse_4.jpg";

export default {
  id: "bedriftsportretter",
  title: "Bedriftsportretter",
  shoots: [
    {
      description: "Pent og Brukt sommerportrett",
      tags: ["portrett", "bedrift"],
      hideFromRecentWorks: true,
      images: [
        {
          url: pentogbrukt_port,
          title: "Portrett av en dame som holder en vase",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-05-28",
    },
    {
      description: "LashBrowser brandingportretter",
      tags: ["portrett", "bedrift", "branding"],
      hideFromRecentWorks: true,
      images: [
        {
          url: lashbrowser_port,
          title: "Portrett av en dame med mobiltelefon",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-05-22",
    },
    {
      description: "Stranger brandingportretter",
      tags: ["portrett", "bedrift", "branding"],
      hideFromRecentWorks: true,
      images: [
        {
          url: stranger_port,
          title: "Portrett av en dame på en lekeplass",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-22",
    },
    {
      description: "TeamHelse - Jessheim brandingportretter",
      tags: ["portrett", "bedrift", "branding"],
      hideFromRecentWorks: true,
      images: [
        {
          url: teamhelse_1_port,
          title: "Portrett av en dame foran beige strå",
          width: 667,
          height: 1000,
        },
        {
          url: teamhelse_2_port,
          title: "Portrett av en dame foran beige strå",
          width: 667,
          height: 1000,
        },
        {
          url: teamhelse_3_port,
          title: "Portrett av en dame foran beige strå",
          width: 667,
          height: 1000,
        },
        {
          url: teamhelse_4_port,
          title: "Portrett av en dame foran beige strå",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-04-24",
    },
  ],
};
