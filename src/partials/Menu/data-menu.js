export const dataMenu = 
[
    {
        title: "Analytics",
        page: "/admin/analytics",
        icon: "chart-bar",
        active: false
    },
    {
        title: "Unidades",
        page: "/admin/unidades",
        icon: "door-open",
        active: false,
        sub: [
            {
                name: "Flats",
                page: "flats",
                active: false
            }
        ]
    },
    {
        title: "Proprietários",
        page: "/admin/proprietarios",
        icon: "user",
        active: false,
    },
    {
        title: "Prédios",
        page: "/admin/predios/",
        icon: "city",
        active: false,
        sub: [
            {
                name: "Flat",
                page: "flat",
                active: false
            },
            {
                name: "Convencional",
                page: "convencional",
                active: false
            },
            {
                name: "Comercial",
                page: "comercial",
                active: false
            }
        ]
    }
];