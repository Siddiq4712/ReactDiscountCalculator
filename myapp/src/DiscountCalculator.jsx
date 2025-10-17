import React, { useState } from 'react'

const DiscountCalculator = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [result, setResult] = useState(null);

    const calculateDiscount = (e) => {
        e.preventDefault();
        const originalPrice = parseFloat(price);
        const discountPercent = parseFloat(discount);

        if (isNaN(originalPrice) || isNaN(discountPercent) || originalPrice < 0 || discountPercent < 0 || discountPercent > 100) {
            alert('Please enter valid numbers. Price must be positive, discount between 0 and 100.');
            return;
        }

        const discountAmount = originalPrice * (discountPercent / 100);
        const finalPrice = originalPrice - discountAmount;

        setResult({
            itemName,
            originalPrice,
            discountPercent,
            discountAmount: discountAmount.toFixed(2),
            finalPrice: finalPrice.toFixed(2)
        });
    };

    return (
        <>
            <h1>Discount Calculator</h1>
            <form onSubmit={calculateDiscount}>
                <input 
                    type="text" 
                    placeholder='Enter item name' 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder='Enter item price' 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                    min="0" 
                    step="0.01" 
                />
                <input 
                    type="number" 
                    placeholder='Enter discount percentage' 
                    value={discount} 
                    onChange={(e) => setDiscount(e.target.value)} 
                    required 
                    min="0" 
                    max="100" 
                    step="0.01" 
                />
                <button type="submit">Calculate</button>
            </form>
            {result && (
                <div>
                    <h2>Calculation Result for {result.itemName}</h2>
                    <p>Original Price: ${result.originalPrice}</p>
                    <p>Discount: {result.discountPercent}%</p>
                    <p>Discount Amount: ${result.discountAmount}</p>
                    <p>Final Price: ${result.finalPrice}</p>
                </div>
            )}
        </>
    )
}

export default DiscountCalculator
