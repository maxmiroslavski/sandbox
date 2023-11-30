import { useRef, useState } from "react";

import { Button } from "./components/shared/ui/atoms";
import { Modal, Dropdown, Tooltip } from "./components/shared/ui/molecules";

import { AnimatePresence } from "framer-motion";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const tooltipButtonRef = useRef<HTMLButtonElement>(null);
  const positionTooltipButton =
    tooltipButtonRef.current?.getBoundingClientRect();

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const positionDropdownButton =
    dropdownButtonRef.current?.getBoundingClientRect();

  return (
    <div className="wrapper">
      <div>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal Window</Button>

        <AnimatePresence>
          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                unde facere dolore repudiandae officiis reiciendis.
              </h1>
            </Modal>
          )}
        </AnimatePresence>
      </div>

      <div>
        <Button
          ref={tooltipButtonRef}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
        >
          Tooltip
        </Button>
        <AnimatePresence>
          {isTooltipOpen && (
            <Tooltip position={positionTooltipButton}>Подсказка</Tooltip>
          )}
        </AnimatePresence>
      </div>

      <div>
        <Button
          ref={dropdownButtonRef}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          Open Dropdown
        </Button>

        <AnimatePresence>
          {isDropdownOpen && (
            <Dropdown position={positionDropdownButton}>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </Dropdown>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
