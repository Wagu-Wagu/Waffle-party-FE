import Close from "../assets/icons/CloseIcon.svg?react";

interface previewProps {
  image: string;
  onClose: () => void;
}

export default function FullImage(props: previewProps) {
  const { image, onClose } = props;
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full overflow-hidden bg-gray15">
      <div
        className="absolute top-0 left-0 py-[1.5rem] px-[2rem] z-50"
        onClick={onClose}
      >
        <Close />
      </div>

      <div className="absolute flex justify-center w-full max-w-full max-h-full overflow-auto transform -translate-x-1/2 -translate-y-1/2 custom-scroll top-1/2 left-1/2">
        <img
          src={image}
          alt="full image view"
          className="object-contain w-auto h-auto"
        />
      </div>
    </div>
  );
}
