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
                name: "Flats",
                page: "flats",
                active: false
            },
            {
                name: "Convencionais",
                page: "convencionais",
                active: false
            },
            {
                name: "Comerciais",
                page: "comerciais",
                active: false
            }
        ]
    }
];