// Nên sử dụng khi:
    // Có nhiều sự linh hoạt và biến đổi trong thuật toán
    // Thay đổi thuật toán khi chạy chương trình
//  Không nên sử dụng khi:
    // Chức năng ít thay đổi
    // yêu cầu đơn giản và cố 

// keyword: mọi con đường đều dẫn đến roma


    // without strategy-pattern
    const getPrice1 = (originalPrice, typePromotion = 'default') => { //khi cần thêm các khuyến mại khác việc mở rộng code bất tiện, lỗi một hàm bị chạy vào try catch
        if(typePromotion === 'preOrder') {
            return originalPrice * 0.8;
        }
        if(typePromotion === 'promotion') {
            return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30
        }
        if(typePromotion === 'default') {
            return originalPrice
        }
    }

    console.log('without strategy PRICE: ', getPrice1(200,'preOrder'))


    
    // strategy-pattern
    const preOrder = (originalPrice) => {
        return originalPrice * 0.8
    }
    const promotionPrice = (originalPrice) => {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30
    }
    const defaultPrice = (originalPrice) => {
        return originalPrice
    }

    const getPriceStrategies = {
        preOrder,
        promotionPrice,
        defaultPrice
    }
    const getPrice = (originalPrice, typePromotion) => {
        return getPriceStrategies[typePromotion](originalPrice);
    }
    console.log('Strategy PRICE: ', getPrice(200, 'preOrder'))


    