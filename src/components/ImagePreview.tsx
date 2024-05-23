interface previewProps {
  images: string[];
  onClick: () => void;
}
export default function ImagePreview(props: previewProps) {
  const { images, onClick } = props;
  return (
    <div className="flex w-full" onClick={onClick}>
      {images.map((src, index) => (
        <div
          className="h-[17rem]"
          key={index}
          style={{
            width: `${index === 0 ? 60.94 : 39.06}%`,
            position: "relative",
          }}
        >
          <img
            className="h-full"
            src={src}
            alt={`업로드 사진 ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {index === 1 && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // 반투명한 검은색
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
