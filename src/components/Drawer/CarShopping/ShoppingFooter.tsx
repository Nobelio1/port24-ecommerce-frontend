export const ShoppingFooter = () => {
  return (
    <div className="w-full h-[290px] shadow-top absolute bottom-0 right-0 p-6">
      <div className="flex justify-between items-center">
        <p className="font-medium">SubTotal</p>
        <p>S/ 41</p>
      </div>
      <div className="flex justify-between items-center font-semibold mt-3 text-xl">
        <p>Total</p>
        <p>S/ 41</p>
      </div>
      <p className="text-xs mt-10">Simula el costo de envío en el siguiente paso.</p>
      <div className="mt-4">
        <button className="bg-black text-white rounded-md py-2 uppercase w-full font-light">Continuar a Checkout</button>
      </div>
    </div>
  )
}
