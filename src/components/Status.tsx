import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ButtonFood from "./Core/ButtonFood/ButtonFood";
import { FaDotCircle } from "react-icons/fa";

type Props = {
  isActive: boolean;
};

export default function Status({ isActive }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(false); // Manage the checkbox state in the parent
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isActive); // Only enable when isActive is true
    console.log(isActive);
  }, [isActive]);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked); // Update the state based on the child component
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    console.log("decrease quantity button clicked");
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(5, prev + 1));
    console.log("increase quantity button clicked");
  };

  const handleSave = () => {
    console.log(`Saved quantity: ${quantity}`);
    // Add your save logic here
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">Status</p>
            <div className="text-slate-400">
              {isChecked ? (
                <div className="flex items-center gap-2">
                  <FaDotCircle color="limegreen" />
                  In for lunch
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaDotCircle color="orangered" />
                  Out for lunch
                </div>
              )}
            </div>
          </div>
          <div className="cursor-pointer">
            <ButtonFood
              isChecked={isChecked}
              onCheckboxChange={handleCheckboxChange}
              disableStatus={isDisabled}
            />
          </div>
        </div>
        <hr className="my-5" />
        <div className="w-full max-w-sm mx-auto space-y-4">
          <p className="text-2xl font-bold">Quantity</p>
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseQuantity}
              className="w-[15%] h-14 rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-500 ease-in-out flex items-center justify-center"
              disabled={isDisabled}
            >
              <span className="text-3xl font-bold text-white">-</span>
            </Button>
            <Input
              type="text"
              value={quantity}
              readOnly
              className="text-center text-xl font-semibold h-14 w-[50%] mx-2"
              disabled={isDisabled}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={increaseQuantity}
              className="w-[15%] h-14 rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-500 ease-in-out flex items-center justify-center"
              disabled={isDisabled}
            >
              <span className="text-3xl font-bold text-white">+</span>
            </Button>
          </div>
          <Button
            className="w-full h-14 text-xl bg-blue-500 hover:bg-blue-700 transition-all duration-500 ease-in-out rounded-full"
            onClick={handleSave}
            disabled={isDisabled}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
