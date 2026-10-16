// Data 60 produk untuk toko online
const productsData = [
    // Best Seller - plisket (10 items)
    { 
        id: 1, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Capucino", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#B79388"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 1.jpg"   // << tambahkan ini
    },

    { 
        id: 55, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Coksu", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#A88C7B"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/dress-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 58, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Pensil", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#D2B7AC"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/dress-abupensil.jpg"   // << tambahkan ini
    },

    { 
        id: 38, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Hitam", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/dress-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 39, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - BW", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#D9D9D1"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/dress-BW.jpg"   // << tambahkan ini
    },

    { 
        id: 2, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Milo", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#9A7799"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 3.jpg"   // << tambahkan ini
    },

    { 
        id: 3, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Maroon", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#481722"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%2C%22model_selection_logic%22%3A2%7D&sp_atk=bc185a43-7d72-4980-8984-c2c16308901e&xptdk=bc185a43-7d72-4980-8984-c2c16308901e",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 24.jpg"   // << tambahkan ini
    },

    { 
        id: 4, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Coksu", 
        category: "Oneset", 
        price: 58000,
        bestSeller: true,
        colors: ["#CBBDB8"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 10.jpg"   // << tambahkan ini
    },
    
    { 
        id: 5, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Pistachio", 
        category: "Oneset", 
        price: 58000,
        bestSeller: true,
        colors: ["#CFD0C1"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 11.jpg"   // << tambahkan ini
    },

    { 
        id: 6, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Maroon", 
        category: "Oneset", 
        price: 58000,
        bestSeller: true,
        colors: ["#481722"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 12.jpg"   // << tambahkan ini
    },
    
    { 
        id: 7, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Navy", 
        category: "Oneset", 
        price: 58000,
        bestSeller: true,
        colors: ["#CFD0C1"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 13.jpg"   // << tambahkan ini
    },
    
    { 
        id: 8, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Hitam", 
        category: "Oneset", 
        price: 58000,
        bestSeller: true,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 14.jpg"   // << tambahkan ini
    },
    
    { 
        id: 9, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Baby Pink", 
        category: "Oneset", 
        price: 69999,
        bestSeller: true,
        colors: ["#C59BA7"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%2C%22model_selection_logic%22%3A3%7D&sp_atk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d&xptdk=ff25fee9-9d36-44d9-ae89-c81ffb277e9d",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 17.jpg"   // << tambahkan ini
    },

    { 
        id: 25, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - BW", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#E9ECF2"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch&t_id=1766395606160&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 25.jpg"   // << tambahkan ini
    },
    
    { 
        id: 26, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Pramuka", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#3F2E2C"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch&t_id=1766395606160&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 30.jpg"   // << tambahkan ini
    },

    { 
        id: 27, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Cinnamon", 
        category: "Dress", 
        price: 69999,
        bestSeller: true,
        colors: ["#7F4824"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch&t_id=1766395606160&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 31.jpg"   // << tambahkan ini
    },

    { 
        id: 35, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Denim", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#738BC9"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 35.jpg"   // << tambahkan ini
    },

    { 
        id: 164, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Khaki", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#CFB790"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 165, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Thaitea", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#CCB3A5"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 168, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Cream", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#DAD4B6"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 169, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Taupe", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#BDAC95"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 170, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Abu Smoke", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#9A8D8D"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 174, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Biru Turquoise", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#47729A"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-biruturquoise.jpg"   // << tambahkan ini
    },

    { 
        id: 183, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Almond", 
        category: "celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#BCABA1"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 203, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Abu Smoke", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#5D5254"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 204, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Latte", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#BE968E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-latte.jpg"   // << tambahkan ini
    },

    { 
        id: 252, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Abu Smoke", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#505163"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 45.jpg"   // << tambahkan ini
    },

    { 
        id: 253, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Coksu", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#AB6347"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 253, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Abu Muda", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#5D6B72"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 254, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Maroon", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#561926"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 255, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Magenta", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#D42250"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 256, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Baby Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#8D9C9B"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 257, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Hijau Pupus", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#866842"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 258, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - BW", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#BBC0BC"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 259, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Merah", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#AF0C19"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 260, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Olive & Army", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#5E5544","#7E8B67"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-olivearmy.jpg"   // << tambahkan ini
    },

    { 
        id: 261, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Baby Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#C87564"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 999, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Ash Gray", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#A9AFC4"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-ashgray.jpg"   // << tambahkan ini
    },

    { 
        id: 998, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Lemon", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#B99C3F"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 997, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Biru Turkish", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#173D5E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-biruturkish.jpg"   // << tambahkan ini
    },

    { 
        id: 996, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Ungu Pastel", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#7A6D7F"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-ungupastel.jpg"   // << tambahkan ini
    },

    { 
        id: 995, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Hijau Lumut", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#A18257"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-hijaulumut.jpg"   // << tambahkan ini
    },

    { 
        id: 271, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Coklat Pramuka", 
        category: "Rok", 
        price: 69999,
        bestSeller: true,
        colors: ["#462618"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 367, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Coksu", 
        category: "Celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#9F938B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 56.jpg"   // << tambahkan ini
    },

    { 
        id: 368, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hijau Tosca", 
        category: "Celana", 
        price: 69999,
        bestSeller: true,
        colors: ["#385360"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 420, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Milo", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: true,
        colors: ["#BBA488"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-milo.jpg"   // << tambahkan ini
    },

    // Dress - payung Mayung (... items)
    { 
        id: 11, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Dusty Ungu", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#9A7799"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 2.jpg"   // << tambahkan ini
    },
    { 
        id: 12, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Pupus", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#55523F"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 4.jpg"   // << tambahkan ini
    },
    { 
        id: 13, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Pensil", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#737184"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 5.jpg"   // << tambahkan ini
    },
    { 
        id: 14, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Biru Turkish", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#0A3C69"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 6.jpg"   // << tambahkan ini
    },

    { 
        id: 15, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Magenta", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#B31E68"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 7.jpg"   // << tambahkan ini
    },

    { 
        id: 16, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Jeans", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#92ACC8"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 8.jpg"   // << tambahkan ini
    },

    { 
        id: 17, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Benhur", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#271A72"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 9.jpg"   // << tambahkan ini
    },

     { 
        id: 23, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Ash", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#FBFCFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 22.jpg"   // << tambahkan ini
    },

    { 
        id: 24, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Ungu Pastel", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#A999AF"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 23.jpg"   // << tambahkan ini
    },

    { 
        id: 23, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Ash", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#FBFCFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 22.jpg"   // << tambahkan ini
    },

    { 
        id: 24, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Navy", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#1A2741"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 29.jpg"   // << tambahkan ini
    },

    { 
        id: 25, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Silver", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#E9ECF2"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 25.jpg"   // << tambahkan ini
    },

    { 
        id: 26, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Hazelnut", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#D68D23"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 26.jpg"   // << tambahkan ini
    },

    { 
        id: 27, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Almond", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#CAC3C4"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 27.jpg"   // << tambahkan ini
    },

    { 
        id: 28, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Hitam", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#0A0C11"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 28.jpg"   // << tambahkan ini
    },

    { 
        id: 32, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Denim", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#1A2741"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 32.jpg"   // << tambahkan ini
    },

    { 
        id: 33, 
        name: "HNGK Aurora Midi Dress Plisket Midi Premium Wanita Pleated Party Inner Dress DS05 - Baby Blue", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#1A2741"],
        shopeeLink: "https://shopee.co.id/HNGK-Aurora-Midi-Dress-Plisket-Midi-Premium-Wanita-Pleated-Party-Inner-Dress-DS05-i.1053108778.27768458994?extraParams=%7B%22display_model_id%22%3A99050794810%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-aurora-midi-dress-plisket-midi-premium-wanita-pleated-party-inner-dress-ds05-1730504178551522427?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 33.jpg"   // << tambahkan ini
    },

    { 
        id: 40, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Denim", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#515C93"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-Denim.png"   // << tambahkan ini
    },

    { 
        id: 41, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Baby Pink", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#B68C8F"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-Babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 42, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Lemon", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#9D9149"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 43, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Mint", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C3D9BB"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 44, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Navy", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#1D2334"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 45, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Almond", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C3BCAF"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 46, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Maroon", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#5E2537"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 47, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Ungu Pastel", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#AE9BA1"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-ungupastel.jpg"   // << tambahkan ini
    },

    { 
        id: 48, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Botol", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#28352F"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-botol.jpg"   // << tambahkan ini
    },
    
    { 
        id: 49, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - tosca", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#4FA7B3"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-tosca.jpg"   // << tambahkan ini
    },

    { 
        id: 50, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - taupe", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#58463E"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 51, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Tua", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#434851"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 52, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Pramuka", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#46302A"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 53, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Cream", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#CABCA7"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 56, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Hijau Zara", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#07543C"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-Hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 57, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Army", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#747E02"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-army.jpg"   // << tambahkan ini
    },

    { 
        id: 59, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Baby Blue", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C9DAD7"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 60, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Silver", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#929AA2"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 61, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Bata", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#9E5545"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 62, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Khaki", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#927962"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 63, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Chestnut", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#927962"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-chestnut.jpg"   // << tambahkan ini
    },

    { 
        id: 64, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Sky Blue", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#95B5F6"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 65, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Muda", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#A7B3B6"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 66, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Salem", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C08B94"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 67, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Rose Pink", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#D198B6"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-rosepink.jpg"   // << tambahkan ini
    },

    { 
        id: 68, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Fanta", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C60143"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 69, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Thaitea", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#D9CDC8"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 71, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Ash Gray", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#BFC6CF"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-ashgray.jpg"   // << tambahkan ini
    },

    { 
        id: 72, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Violet", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#CEBDCB"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 73, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Hijau Pupus", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#C5AE74"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 74, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Olive", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#574532"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 75, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Merah", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#88192A"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 76, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Royal Blue", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#2C44AD"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 77, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Smoke", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#423C3C"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 77, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Cinnamon", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#B68060"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 78, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Dusty Pink", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#A174AA"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 79, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Jeans", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#819DE2"],
       shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-jeans.jpg"   // << tambahkan ini
    },

    { 
        id: 80, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Banana", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#F5FCD5"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-banana.jpg"   // << tambahkan ini
    },

    { 
        id: 80, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Pistachio", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#AAA478"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-pistachio.jpg"   // << tambahkan ini
    },

    { 
        id: 81, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Soft Pink", 
        category: "Dress", 
        price: 69999,
        bestSeller: false,
        colors: ["#D0A6C3"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/dress-softpink.jpg"   // << tambahkan ini
    },

    // One Set (... items)
    
    { 
        id: 18, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03- BW", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#D6DCE6"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 16.jpg"   // << tambahkan ini
    },

    { 
        id: 19, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Merah", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#A82134"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 18.jpg"   // << tambahkan ini
    },

    { 
        id: 20, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03- Banana", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#E1E5C9"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 19.jpg"   // << tambahkan ini
    },

    { 
        id: 21, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Pramuka", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#413635"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 20.jpg"   // << tambahkan ini
    },
    
    { 
        id: 22, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Abu Muda", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#7D8FA0"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 21.jpg"   // << tambahkan ini
    },

    { 
        id: 70, 
        name: "HNGK Akari Signature Pants One Set Setelan Blouse Atasan Kulot Plisket Payung Flare Pleated A010 K03 - Hijau Botol", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#132E3B"],
        shopeeLink: "https://shopee.co.id/HNGK-Akari-Signature-Pants-One-Set-Setelan-Blouse-Atasan-Kulot-Plisket-Payung-Flare-Pleated-A010-K03-i.1053108778.42967405001?extraParams=%7B%22display_model_id%22%3A196247994112%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-akari-signature-pants-one-set-setelan-blouse-atasan-plisket-dan-kulot-payung-flare-pleated-top-sleeveless-tanpa-lengan-wanita-a010-k03-1732393988777935995?extParam=whid%3D18283601%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 15.jpg"   // << tambahkan ini
    },

    { 
        id: 82, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Smoke", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#271F19"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/oneset-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 83, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Abu Tua", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#2D3041"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/oneset-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 84, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Olive", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#463C18"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/oneset-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 85, 
        name: "HNGK Ray Dress Plisket Payung Mayung Maxi Premium Wanita Basic Pleated Flare Inner Korean Casual DS03 - Golden", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#5B412A"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/oneset-golden.jpg"   // << tambahkan ini
    },

    { 
        id: 86, 
        name: "nama - nama", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#2B5150"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 50.jpg"   // << tambahkan ini
    },

    { 
        id: 87, 
        name: "nama - nama", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#D8ACBA"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 51.jpg"   // << tambahkan ini
    },

    { 
        id: 88, 
        name: "nama - nama", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#B1755E"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 52.jpg"   // << tambahkan ini
    },

    { 
        id: 89, 
        name: "nama - nama", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#C5B3AC"],
        shopeeLink: "https://shopee.co.id/HNGK-Ray-Dress-Plisket-Payung-Mayung-Maxi-Premium-Wanita-Basic-Pleated-Flare-Inner-Korean-Casual-DS03-i.1053108778.15898403190?extraParams=%7B%22display_model_id%22%3A29569416205%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-ray-dress-plisket-payung-mayung-maxi-premium-wanita-basic-pleated-flare-inner-korean-casual-ds03-1729857461702002811?extParam=ivf%3Dfalse%26keyword%3Dhinagiku%26search_id%3D20251222091406FE73F687E5BC52102S03%26src%3Dsearch%26whid%3D18283601&t_id=1766395606160&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 53.jpg"   // << tambahkan ini
    },

    { 
        id: 90, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hijau Botol", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#223D3E"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Blouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 54.jpg"   // << tambahkan ini
    },

    { 
        id: 91, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Coksu", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#9C8C87"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Blouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 64.jpg"   // << tambahkan ini
    },

    { 
        id: 92, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Golden", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#925540"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Blouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 66.jpg"   // << tambahkan ini
    },

    { 
        id: 93, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Baby Pink", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#D3AEBB"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 66.jpg"   // << tambahkan ini
    },

    { 
        id: 94, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hitam", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-hitam.jpg"   // << tambahkan ini
    },
    { 
        id: 95, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Salem", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#BF8585"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 96, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Milo", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#C29E89"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 97, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hijau Zara", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#335A47"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 98, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Latte", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#B39886"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-latte.jpg"   // << tambahkan ini
    },

    { 
        id: 99, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Magenta", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#A62F70"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 100, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Sunkist", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#DD6818"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 101, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Olive", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#533423"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 102, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Biru Turkish", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#3F6E9C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-biruturkish.jpg"   // << tambahkan ini
    },

    { 
        id: 103, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Abu Smoke", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#7E6C67"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 104, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Taupe", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#9E876B"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 105, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Baby Blue", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#C2D0DA"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 106, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Maroon", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#AA4C55"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 107, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Cream", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#F9F2DC"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 108, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Almond", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#D5C9B4"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-Almond.jpg"   // << tambahkan ini
    },

    { 
        id: 109, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hijau Tosca", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#3E6C89"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 110, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Pramuka", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#563F35"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 111, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Moca", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#85664E"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-moca.jpg"   // << tambahkan ini
    },

    { 
        id: 112, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Navy", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D4A72"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 113, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Merah", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#741A23"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 114, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hazelnut", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#E3A22A"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 115, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Lemon", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#EAD26D"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 116, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Silver", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#EFEFF1"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 117, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Kakhi", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#F7EBCE"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-kakhi.jpg"   // << tambahkan ini
    },

    { 
        id: 118, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Denim", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#637AB4"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-denim.jpg"   // << tambahkan ini
    },

    { 
        id: 119, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Dusty Ungu", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#8D6772"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 120, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Violet", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#A58E9C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 121, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Cinnamon", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#D5995E"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 122, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Cappucino", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#B19B84"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-cappucino.jpg"   // << tambahkan ini
    },

    { 
        id: 123, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Mint", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#A1BE9F"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-silver.jpg"   // << tambahkan ini
    },
    { 
        id: 124, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Abu Pensil", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#756C6C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-abupensil.jpg"   // << tambahkan ini
    },
    { 
        id: 125, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Fanta", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#DA0063"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-fanta.jpg"   // << tambahkan ini
    },
    { 
        id: 126, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Army", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#AFAA5D"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-army.jpg"   // << tambahkan ini
    },
    { 
        id: 127, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Benhur", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#0B0967"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-benhur.jpg"   // << tambahkan ini
    },
    { 
        id: 128, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Anggur", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#704D7C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-anggur.jpg"   // << tambahkan ini
    },
    { 
        id: 129, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Abu Tua", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#8893A7"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-abutua.jpg"   // << tambahkan ini
    },
    { 
        id: 130, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Ash Gray", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#E7E5E2"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-ashgray.jpg"   // << tambahkan ini
    },
    { 
        id: 131, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Sky Blue", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#9CCAEF"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-skyblue.jpg"   // << tambahkan ini
    },
    { 
        id: 132, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Royal Blue", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D6AE8"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-royalblue.jpg"   // << tambahkan ini
    },
    { 
        id: 133, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Thaitea", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#E1C9B3"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-thaitea.jpg"   // << tambahkan ini
    },
    { 
        id: 134, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Hijau Pupus", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#DDCE9C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-hijaupupus.jpg"   // << tambahkan ini
    },
    { 
        id: 135, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Abu Muda", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#A7ADA6"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-abumuda.jpg"   // << tambahkan ini
    },
    { 
        id: 136, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Ungu Pastel", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#B8989F"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-ungupastel.jpg"   // << tambahkan ini
    },
    { 
        id: 137, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - BW", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#FCFCFA"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-bw.jpg"   // << tambahkan ini
    },
    { 
        id: 138, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Chestnut", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#96714C"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-chestnut.jpg"   // << tambahkan ini
    },

    { 
        id: 139, 
        name: "HNGK Daisan Luster Loft One Set Setelan Blouse Atasan Cardigan dan Dress atau Celana Pensil Plisket BB Kancing Busui A03 BB01 P015 - Bata", 
        category: "Oneset", 
        price: 69999,
        bestSeller: false,
        colors: ["#B35A36"],
        shopeeLink: "https://shopee.co.id/HNGK-Daisan-Luster-Loft-One-Set-Setelan-Bl ouse-Atasan-Cardigan-dan-Dress-atau-Celana-Pensil-Plisket-BB-Kancing-Busui-A03-BB01-P015-i.1053108778.19494467842?extraParams=%7B%22display_model_id%22%3A88848432001%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-daisan-luster-loft-one-set-setelan-blouse-atasan-cardigan-dan-dress-atau-celana-pensil-plisket-bb-kancing-busui-a03-bb01-p015-1729988256105465979?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/onesetBB-bata.jpg"   // << tambahkan ini
    },

    // Kulot (.... items)
    { 
        id: 34, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Pupus", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#B9B59A"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 34.jpg"   // << tambahkan ini
    },

    { 
        id: 36, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Dusty Pink", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#DAABCF"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 36.jpg"   // << tambahkan ini
    },

    { 
        id: 37, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Milk Tea", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#B37D65"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 37.jpg"   // << tambahkan ini
    },

    { 
        id: 140, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hitam", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 141, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Milo", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#94766C"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 142, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Mocca", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#BCA5A0"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-mocca.jpg"   // << tambahkan ini
    },

    { 
        id: 143, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Coksu", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#C9BDB3"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 144, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Golden Brown", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#695D47"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-GB.jpg"   // << tambahkan ini
    },

    { 
        id: 145, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Coklat Pramuka", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D2A1F"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 146, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Navy", 
        category: "celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#26253C"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-navy.jpg"   // << tambahkan ini
    },
    
    { 
        id: 147, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Maroon", 
        category: "celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D040E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 148, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Abu Tua", 
        category: "celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#67718E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 149, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Silver", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#C7C9D6"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 150, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Lemon", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#988F2C"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 151, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Baby Pink", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#CBA0A1"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 1452, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Baby Blue", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#5E7986"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 153, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Putih", 
        category: "celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#FFFFFF"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-putih.jpg"   // << tambahkan ini
    },

    { 
        id: 154, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - BW", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#D9D9D1"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 155, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Army", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#767642"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hijauarmy.jpg"   // << tambahkan ini
    },
    { 
        id: 156, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Tua", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#3A3A20"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hijautua.jpg"   // << tambahkan ini
    },

    { 
        id: 157, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Botol", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#273538"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hijaubotol.jpg"   // << tambahkan ini
    },

    { 
        id: 158, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Bata", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#A45341"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 159, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Dusty Lilac", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#94649E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-dustylilac.jpg"   // << tambahkan ini
    },

    { 
        id: 160, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Lilac", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#E4DAEC"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-lilac.jpg"   // << tambahkan ini
    },

    { 
        id: 161, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Ungu Pastel", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#D3C4CC"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-ungupastel.jpg"   // << tambahkan ini
    },

    { 
        id: 162, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Dusty Ungu", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#A1839E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 163, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Violet", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#CDB9B8"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 166, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Mint", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#A2B37E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 167, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Ungu Anggur", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#766480"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-unguanggur.jpg"   // << tambahkan ini
    },

    { 
        id: 171, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Magenta", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#BE2875"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 172, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Fanta", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#AF4271"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 173, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Tosca", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#4B8498"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 175, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Sunkist", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#C75137"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 176, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Rose Pink", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#CA9097"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-rosepink.jpg"   // << tambahkan ini
    },

    { 
        id: 177, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hazelnut", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#D3943E"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 179, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Salem", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#CF9F92"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 180, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Abu Muda", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#B1B3AC"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 181, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Sky Blue", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#ABCCF7"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 182, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Royal Blue", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#4567BD"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 183, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Hijau Zara", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#539175"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 183, 
        name: "New Colours HNGK Signature Pants Celana Kulot Plisket Payung Mayung Maxi Panjang Semata Kaki Pleated Premium Wanita K03 - Cinnamon", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#AF8256"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCP-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 184, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Hitam", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 185, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Rose Pink", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#C47984"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-rosepink.jpg"   // << tambahkan ini
    },

    { 
        id: 186, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Merah", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#6B0528"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 187, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Benhur", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#0C0B39"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-benhur.jpg"   // << tambahkan ini
    },

    { 
        id: 188, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Milk Tea", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#BB8E68"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-milktea.jpg"   // << tambahkan ini
    },

    { 
        id: 189, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Baby Pink", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#AC8194"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 38.jpg"   // << tambahkan ini
    },

    { 
        id: 190, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Almond", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#EAE6E7"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 39.jpg"   // << tambahkan ini
    },

    { 
        id: 191, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Olive", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#60482D"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 40.jpg"   // << tambahkan ini
    },

    { 
        id: 192, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Navy", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#202648"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 41.jpg"   // << tambahkan ini
    },

     { 
        id: 193, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Hijau Botol", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#4F8A71"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-hijaubotol.jpg"   // << tambahkan ini
    },

    { 
        id: 194, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Magenta", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#B81D6C"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 195, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Army", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#3E3815"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 196, 
        name: "New Colours HNGK Signature Midi Pants Celana Kulot Plisket Payung Mayung Midi Tanggung 7/8 Pleated K05 - Abu Smoke", 
        category: "kulot", 
        price: 69999,
        bestSeller: false,
        colors: ["#605254"],
        shopeeLink: "https://shopee.co.id/New-Colours-HNGK-Signature-Pants-Celana-Kulot-Plisket-Payung-Mayung-Maxi-Panjang-Semata-Kaki-Pleated-Premium-Wanita-K03-i.1053108778.27576484101?extraParams=%7B%22display_model_id%22%3A233812885187%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-pants-celana-kulot-plisket-payung-mayung-maxi-panjang-semata-kaki-pleated-premium-wanita-k03-1730877654900311163?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/kulotCPen-abusmoke.jpg"   // << tambahkan ini
    },

    // Top (.. items)
    

    { 
        id: 197, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Hitam", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 198, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Coksu", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#ACA59B"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 199, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Navy", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#324263"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 200, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Maroon", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#5F3040"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 200, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Baby Pink", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#E1BCCE"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 200, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Almond", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#CED0CC"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 200, 
        name: "HNGK Teru Vest Atasan Plisket Wanita Pleated Top Premium Kancing Busui A015 - Denim", 
        category: "Top", 
        price: 69999,
        bestSeller: false,
        colors: ["#91A3D1"],
        shopeeLink: "https://shopee.co.id/HNGK-Teru-Vest-Atasan-Plisket-Wanita-Pleated-Top-Premium-Kancing-Busui-A015-i.1053108778.43024418842?extraParams=%7B%22display_model_id%22%3A261981636398%2C%22model_selection_logic%22%3A2%7D&sp_atk=c1eae450-6f69-4b75-8329-09ecc2c84e0b&xptdk=c1eae450-6f69-4b75-8329-09ecc2c84e0b",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-teru-vest-atasan-plisket-wanita-pleated-top-premium-kancing-busui-a015-1732864073141683323?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/topPlis-denim.jpg"   // << tambahkan ini
    },
    // Rok (... items)
    
    { 
        id: 201, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hitam", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 202, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Maroon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D111D"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 205, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Navy", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#151F2F"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 206, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Coksu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B29283"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 207, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Milo", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7B5543"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 208, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Silver", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D3D0CE"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 209, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Baby Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D19A9B"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 210, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Biru Turkish", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#20547B"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-biruturkish.jpg"   // << tambahkan ini
    },

    { 
        id: 211, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Magenta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#880D3E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 212, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - BW", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#E2DEDA"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 213, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Mocca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A46E5E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-mocca.jpg"   // << tambahkan ini
    },

    { 
        id: 214, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Golden Brown", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#86523A"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 44.jpg"   // << tambahkan ini
    },

    { 
        id: 215, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Pramuka", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#48302C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 216, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Abu Tua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["4F5367"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 217, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Lemon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#BEA440"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 218, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Mustard", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#FBAF50"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-mustard.jpg"   // << tambahkan ini
    },

    { 
        id: 219, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Ash Gray", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9A8E8D"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-ashgray.jpg"   // << tambahkan ini
    },

    { 
        id: 220, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Dusty Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D57D7B"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 221, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Baby Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9A9DA6"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 222, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Putih", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#FFFFFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-putih.jpg"   // << tambahkan ini
    },

    { 
        id: 223, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Army", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#685623"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-army.jpg"   // << tambahkan ini
    },

    { 
        id: 224, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hijau Tua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D3F1E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hijautua.jpg"   // << tambahkan ini
    },

    { 
        id: 225, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hijau Botol", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#264A49"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 43.jpg"   // << tambahkan ini
    },

    { 
        id: 226, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hijau Pupus", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B7A53F"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 227, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Bata", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#E76A59"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 228, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Lilac", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#DDB6D9"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-lilac.jpg"   // << tambahkan ini
    },

    { 
        id: 229, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Dusty Lilac", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#8E5E96"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-dustylilac.jpg"   // << tambahkan ini
    },

    { 
        id: 230, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Ungu Pastel", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#AB9FBB"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-ungupastel.jpg"   // << tambahkan ini
    },

    { 
        id: 231, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Dusty Ungu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#98758C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 232, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Violet", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#785A62"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 233, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Khaki", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9E836C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 234, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Thaitea", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A28076"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 235, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Mint", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B1D19C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 236, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Anggur", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#2A121C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-anggur.jpg"   // << tambahkan ini
    },

    { 
        id: 237, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Cream", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#AF9571"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 238, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Denim", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#495C7D"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-denim.jpg"   // << tambahkan ini
    },

    { 
        id: 239, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Taupe", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#8A786E"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 240, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Fanta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A70D4B"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 241, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Sunkist", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#EE4E48"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 242, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hazelnut", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#DC7437"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 243, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Olive", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#563D24"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 244, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Salem", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D47472"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 245, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Abu Muda", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#859397"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 246, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Sky Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#5081C3"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 247, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Royal Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#0D3E99"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 248, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hijau Zara", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#0D7658"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 249, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Milktea", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C3824C"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-milktea.jpg"   // << tambahkan ini
    },

    { 
        id: 250, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Cinnamon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7A3725"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 251, 
        name: "HNGK Signature Midi Skirt Rok Plisket Payung Mayung Midi Tanggung 7/8 Pleated Premium Wanita R04 - Hijau Tosca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#043A43"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/payungRPen-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 261, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Hitam", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 262, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Cream", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#BBA284"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 263, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Almond", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B9A399"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 264, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Taupe", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#715D4F"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 265, 
        name: "HNGK Bloom Midi Skirt Rok Plisket 7/8 Lidi Midi Span Wavy R031 - Hazelnut", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B54F09"],
        shopeeLink: "https://shopee.co.id/HNGK-Signature-Midi-Skirt-Rok-Plisket-Payung-Mayung-Midi-Tanggung-7-8-Pleated-Premium-Wanita-R04-i.1053108778.18982923519?extraParams=%7B%22display_model_id%22%3A216953563977%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-signature-midi-skirt-rok-plisket-payung-mayung-midi-tanggung-7-8-pleated-premium-wanita-r04-1729552311196158075?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/midiRPen-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 266, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hitam", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 267, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Mocca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#845443"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-mocca.jpg"   // << tambahkan ini
    },

    { 
        id: 268, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Milo", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#73544B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 269, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Coksu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9A8179"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 270, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Golden Brown", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#5F3727"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-goldenbrown.jpg"   // << tambahkan ini
    },

    { 
        id: 272, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Navy", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#28263D"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 273, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Maroon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#430C1A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 274, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Abu Tua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#474960"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 275, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Silver", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9C929E"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 276, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Lemon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#927C30"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 277, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Mustard", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#DF9E40"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-mustard.jpg"   // << tambahkan ini
    },

    { 
        id: 278, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Dusty Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#AF617C"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 279, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Baby Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D18893"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-babypink.jpg"   // << tambahkan ini
    },

    { 
        id: 280, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Baby Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#74A6EA"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 49.jpg"   // << tambahkan ini
    },

    { 
        id: 281, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Putih", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#FFFFFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-putih.jpg"   // << tambahkan ini
    },

    { 
        id: 282, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - BW", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#FEFCFC"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 283, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Army", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#564621"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijauarmy.jpg"   // << tambahkan ini
    },

    { 
        id: 284, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Tua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#2F2712"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijautua.jpg"   // << tambahkan ini
    },

    { 
        id: 285, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Botol", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#25393A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijaubotol.jpg"   // << tambahkan ini
    },

    { 
        id: 286, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Pupus", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7F654A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 287, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Bata", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#943528"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 288, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Dusty Lilac", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9F687F"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-dustylilac.jpg"   // << tambahkan ini
    },

    { 
        id: 289, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - lilac", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A4899E"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-lilac.jpg"   // << tambahkan ini
    },

    { 
        id: 290, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Ungu Pastel", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A298A4"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 59.jpg"   // << tambahkan ini
    },

    { 
        id: 291, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Dusty Ungu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7C5C78"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 292, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Violet", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#6B3E3B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 293, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Khaki", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A98065"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 294, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Thaitea", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#805138"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 295, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Mint", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#928C6B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 296, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Ungu Anggur", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D2A4C"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-unguanggur.jpg"   // << tambahkan ini
    },
    
    { 
        id: 297, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Cream", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A38468"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 298, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Denim", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7178AB"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-denim.jpg"   // << tambahkan ini
    },

    { 
        id: 299, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Taupe", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#836A5F"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 300, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Abu Smoke", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#5D4648"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 301, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Magenta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A40047"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 302, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Fanta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#BD0045"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 303, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Tosca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#0C3C50"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 304, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Biru Turquoise", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#165D8D"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-biruturquoise.jpg"   // << tambahkan ini
    },

    { 
        id: 305, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Sunkist", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C53233"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 306, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hazelnut", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#803932"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 307, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Pink Salem", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 308, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Sky Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#85A4E0"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 309, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Royal Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#1E48D4"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 310, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Hijau Zara", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#1B6352"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 311, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Olive", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#513112"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 312, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Abu Muda", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A99C8C"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 313, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Abu Pensil", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A298A4"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 59.jpg"   // << tambahkan ini
    },

    { 
        id: 314, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Merah", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#861216"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 315, 
        name: "HNGK Linea Skirt Rok Plisket Span Lidi Panjang Maxi Bodycon Premium Wanita R08 - Cinnamon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#783E25"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Skirt-Rok-Plisket-Span-Lidi-Panjang-Maxi-Bodycon-Premium-Wanita-R08-i.1053108778.16598582985?extraParams=%7B%22display_model_id%22%3A214525502176%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-skirt-rok-plisket-span-lidi-panjang-maxi-bodycon-premium-wanita-r08-1729452551672006779?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/lidiRPan-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 316, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Hitam", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 317, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Milo", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#87482F"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 318, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Navy", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3B3649"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 319, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Abu Tua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#424F65"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 320, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - BW", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#E8DAD2"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 321, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Khaki", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#DA915C"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 322, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Thaitea", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C18B7E"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 323, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Denim", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#405887"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-denim.jpg"   // << tambahkan ini
    },

    { 
        id: 324, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Abu Smoke", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3E363B"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 325, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Baby Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7E7E7A"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 326, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Baby Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#CD7B6E"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-babypink.jpg"   // << tambahkan ini
    },
    
    { 
        id: 327, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Coksu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C27756"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-coksu.jpg"   // << tambahkan ini
    },

    { 
        id: 328, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Maroon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#642D35"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 329, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Hijau Pupus ", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7B6542"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 330, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Army", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#71653D"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-army.jpg"   // << tambahkan ini
    },

    { 
        id: 331, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Olive", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#71653D"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 332, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Hijau Zara", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#355345"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 333, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Hijau Botol", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#203129"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hijaubotol.jpg"   // << tambahkan ini
    },

    { 
        id: 334, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Magenta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C83064"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 335, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Fanta", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#BD123F"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 336, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Royal Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#415BBD"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 337, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Bata", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A75844"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 338, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Biru Turkish", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#426A80"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-biruturkish.jpg"   // << tambahkan ini
    },

    { 
        id: 339, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Cream", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D4C0A2"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 340, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - almond", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A09179"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 341, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Lemon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C9A246"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 342, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Tosca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#82AEAD"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hijautosca.jpg"   // << tambahkan ini
    },

    { 
        id: 343, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Silver", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9F9796"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 344, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Mint", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B0B186"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 345, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Golden", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#895644"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-golden.jpg"   // << tambahkan ini
    },

    { 
        id: 346, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Mocca", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B5866B"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-mocca.jpg"   // << tambahkan ini
    },

    { 
        id: 347, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Sunkist", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D16552"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 348, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Dusty Ungu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#8C6575"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 349, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Hijau Tua ", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#524C3A"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-hijautua.jpg"   // << tambahkan ini
    },

    { 
        id: 350, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Cinnamon", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#6A402B"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 351, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Sky Blue", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#717FA8"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 352, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Aqua", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#7C9DA2"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-aqua.jpg"   // << tambahkan ini
    },

    { 
        id: 353, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Pramuka", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#3D251E"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 354, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Abu Muda", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#91938C"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 355, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Latte", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A5887D"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-latte.jpg"   // << tambahkan ini
    },

    { 
        id: 356, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Dusty Pink", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#B88BA0"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 357, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Abu Pensil", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#C1C1BD"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-abupensil.jpg"   // << tambahkan ini
    },

    { 
        id: 358, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Cappucino", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#AA9273"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-cappucino.jpg"   // << tambahkan ini
    },

    { 
        id: 359, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Chestnut", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D2B490"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-chestnut.jpg"   // << tambahkan ini
    },

    { 
        id: 360, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Kayu", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#A28F7F"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-kayu.jpg"   // << tambahkan ini
    },

    { 
        id: 361, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Ash Gray", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#D0CDC8"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-ashgray.jpg"   // << tambahkan ini
    },

    { 
        id: 362, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Putih", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#FFFFFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-putih.jpg"   // << tambahkan ini
    },

    { 
        id: 363, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Ungu Pastel", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#69635A"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/img 60.jpg"   // << tambahkan ini
    },

    { 
        id: 364, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Violet", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#8C6C71"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 365, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Taupe", 
        category: "Rok", 
        price: 69999,
        bestSeller: false,
        colors: ["#9F938B"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-taupe.jpg"   // << tambahkan ini
    },


    // Celana - (... items)

    { 
        id: 366, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hitam", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-taupe.jpg"   // << tambahkan ini
    },

    { 
        id: 373, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Baby Pink", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#AA99AA"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 57.jpg"   // << tambahkan ini
    },

    { 
        id: 367, 
        name: "HNGK Bloom Skirt Rok Plisket Span Lidi Wavy Panjang Maxi Bodycon Premium Wanita R019 - Taupe", 
        category: "celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#9F938B"],
        shopeeLink: "https://shopee.co.id/HNGK-Bloom-Skirt-Rok-Plisket-Span-Lidi-Wavy-Panjang-Maxi-Bodycon-Premium-Wanita-R019-i.1053108778.22252036846?extraParams=%7B%22display_model_id%22%3A206973308417%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-bloom-skirt-rok-plisket-span-lidi-wavy-panjang-maxi-bodycon-premium-wanita-r019-1729635964974762107?extParam=ivf%3Dfalse%26keyword%3Dhngk+bloom+skirt+rok+plisket+span+lidi+wavy+panjang+maxi+bodycon+premium+wanita+r019%26search_id%3D202512271053253AD7C2EBB96FCB028J58%26src%3Dsearch&t_id=1766832808601&t_st=2&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result",
        image: "aset/products/wavyRPan-taupe.jpg"   // << tambahkan ini
    },
    
    { 
        id: 369, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Maroon", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#481316"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-maroon.jpg"   // << tambahkan ini
    },

    { 
        id: 370, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Navy", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#171320"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 371, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Milo", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#724D3A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-milo.jpg"   // << tambahkan ini
    },

    { 
        id: 372, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Silver", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#A6A7AB"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-silver.jpg"   // << tambahkan ini
    },

    { 
        id: 374, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Biru Turkish", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#53789D"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-biruturkish.jpg"   // << tambahkan ini
    },

    { 
        id: 375, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Magenta", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#C82B7E"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-magenta.jpg"   // << tambahkan ini
    },

    { 
        id: 376, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - BW", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#DBD0CA"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-bw.jpg"   // << tambahkan ini
    },

    { 
        id: 377, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Mocca", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#A18477"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-mocca.jpg"   // << tambahkan ini
    },

    { 
        id: 378, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Golden Brown", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#6B4121"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-goldenbrown.jpg"   // << tambahkan ini
    },

    { 
        id: 379, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Pramuka", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#6B4121"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 380, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Abu Tua", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#626A79"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-abutua.jpg"   // << tambahkan ini
    },

    { 
        id: 381, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Lemon", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#CAAD63"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-lemon.jpg"   // << tambahkan ini
    },

    { 
        id: 382, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Ash Gray", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#C2BCBB"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-ashgray.jpg"   // << tambahkan ini
    },

    { 
        id: 383, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Dusty Pink", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#AF7995"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 384, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Baby Blue", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#A7B7C5"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-babyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 385, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Putih", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#FFFFFF"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-putih.jpg"   // << tambahkan ini
    },

    { 
        id: 386, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Army", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#6E6B45"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-army.jpg"   // << tambahkan ini
    },

    { 
        id: 387, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hijau Tua", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#464232"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hijautua.jpg"   // << tambahkan ini
    },

    { 
        id: 388, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hijau Botol", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#445E5D"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hijaubotol.jpg"   // << tambahkan ini
    },

    { 
        id: 389, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hijau Pupus", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#6E562F"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hijaupupus.jpg"   // << tambahkan ini
    },

    { 
        id: 390, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Bata", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#BB7666"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-bata.jpg"   // << tambahkan ini
    },

    { 
        id: 391, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Ungu Pastel", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#8A8EA6"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 55.jpg"   // << tambahkan ini
    },

    { 
        id: 392, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Dusty Ungu", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#7A657B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-dustyungu.jpg"   // << tambahkan ini
    },

    { 
        id: 393, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Violet", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#BCA4AE"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-violet.jpg"   // << tambahkan ini
    },

    { 
        id: 394, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Khaki", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#B09C87"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-khaki.jpg"   // << tambahkan ini
    },

    { 
        id: 395, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Thaitea", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#B9A69F"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-thaitea.jpg"   // << tambahkan ini
    },

    { 
        id: 396, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Mint", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#C1C9A2"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-mint.jpg"   // << tambahkan ini
    },

    { 
        id: 397, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Cream", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#CAC2AC"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 398, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Denim", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#4364A5"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/img 62.jpg"   // << tambahkan ini
    },

    { 
        id: 399, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Abu Smoke", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#807678"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-abusmoke.jpg"   // << tambahkan ini
    },

    { 
        id: 400, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Fanta", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#B20647"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-fanta.jpg"   // << tambahkan ini
    },

    { 
        id: 401, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Sunkist", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#C0544A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-sunkist.jpg"   // << tambahkan ini
    },

    { 
        id: 402, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hazelnut", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#BA7C47"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hazelnut.jpg"   // << tambahkan ini
    },

    { 
        id: 403, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Olive", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#6A5940"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-olive.jpg"   // << tambahkan ini
    },

    { 
        id: 404, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Salem", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#BE817C"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-salem.jpg"   // << tambahkan ini
    },

    { 
        id: 405, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Abu muda", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#8B9595"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-abumuda.jpg"   // << tambahkan ini
    },

    { 
        id: 406, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Sky Blue", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#7E99D2"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-skyblue.jpg"   // << tambahkan ini
    },

    { 
        id: 407, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Royal Blue", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#3751AA"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-royalblue.jpg"   // << tambahkan ini
    },

    { 
        id: 408, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Hijau Zara", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#3F6E5A"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-hijauzara.jpg"   // << tambahkan ini
    },

    { 
        id: 409, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Milktea", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#BD9872"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-milktea.jpg"   // << tambahkan ini
    },

    { 
        id: 410, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Cinnamon", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#764D3B"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-cinnamon.jpg"   // << tambahkan ini
    },

    { 
        id: 411, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Almond", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#B4AC9C"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 412, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Anggur", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#3E3254"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-anggur.jpg"   // << tambahkan ini
    },

    { 
        id: 413, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Merah", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#9C2031"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-merah.jpg"   // << tambahkan ini
    },

    { 
        id: 414, 
        name: "HNGK Linea Pants Celana Kulot Plisket Lidi Panjang Maxi Premium Wanita K09 - Dusty Lilac", 
        category: "Celana", 
        price: 69999,
        bestSeller: false,
        colors: ["#AE94C7"],
        shopeeLink: "https://shopee.co.id/HNGK-Linea-Pants-Celana-Kulot-Plisket-Lidi-Panjang-Maxi-Premium-Wanita-K09-i.1053108778.22977640286?extraParams=%7B%22display_model_id%22%3A108986328944%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-linea-pants-celana-kulot-plisket-lidi-panjang-maxi-premium-wanita-k09-1729482880930908283?extParam=src%3Dshop%26whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/celanaPan-dustylilac.jpg"   // << tambahkan ini
    },

    // Cardigan (5 items)
    
    { 
        id: 415, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Hitam", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#000000"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-hitam.jpg"   // << tambahkan ini
    },

    { 
        id: 416, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Pramuka", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#503832"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-pramuka.jpg"   // << tambahkan ini
    },

    { 
        id: 417, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Navy", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#4C4C60"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-navy.jpg"   // << tambahkan ini
    },

    { 
        id: 418, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Cream", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#C6B8A0"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-cream.jpg"   // << tambahkan ini
    },

    { 
        id: 419, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Almond", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#EFE1D6"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-almond.jpg"   // << tambahkan ini
    },

    { 
        id: 421, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Dusty Pink", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#CA8679"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-dustypink.jpg"   // << tambahkan ini
    },

    { 
        id: 422, 
        name: "HNGK Tsuki Cardigan Knit Outer Scallop Wavy Rajut Lengan Panjang Wanita A014 - Vermillion Red", 
        category: "Cardigan", 
        price: 69999,
        bestSeller: false,
        colors: ["#9E3E3E"],
        shopeeLink: "https://shopee.co.id/HNGK-Tsuki-Cardigan-Knit-Outer-Scallop-Wavy-Rajut-Lengan-Panjang-Wanita-A014-i.1053108778.40272826605?extraParams=%7B%22display_model_id%22%3A306853612135%7D",
        tokopediaLink: "https://www.tokopedia.com/hinagikuid/hngk-tsuki-cardigan-knit-outer-scallop-wavy-rajut-lengan-panjang-wanita-a014-1732746629649499259?extParam=whid%3D18283601&aff_unique_id=&channel=others&chain_key=",
        image: "aset/products/cardigan-vermillionred.jpg"   // << tambahkan ini
    }
];

// Export data untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}