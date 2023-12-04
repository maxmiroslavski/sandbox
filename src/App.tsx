import { Button } from "./components/shared/ui/atoms";
import { Modal, Dropdown, Tooltip } from "./components/shared/ui/molecules";

export const App = () => {
  return (
    <div className="wrapper">
      <div>
        <Modal id="modal-root" button={<Button>Open Modal Window</Button>}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, unde
            facere dolore repudiandae officiis reiciendis.
          </h1>
        </Modal>
      </div>

      <div>
        <Tooltip id="tooltip-root" button={<Button>Tooltip</Button>}>
          Подсказка
        </Tooltip>
      </div>

      <div>
        <Dropdown id="dropdown-root" button={<Button>Open Dropdown</Button>}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </Dropdown>
        <Dropdown id="dropdown-root" button={<Button>Open Dropdown</Button>}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
};
