import { useEffect, useState } from 'react';
import { ICardProps } from '../../models';

export const Card: React.FC<ICardProps> = ({
    title,
    text,
    buttonText,
    imageSrc,
    specialTitle,
    hideImage,
    children
  }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(imageSrc);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (imageSrc && !hideImage) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        setImgSrc(imageSrc);
        setImgError(false);
      };
      img.onerror = () => {
        setImgSrc(undefined);
        setImgError(true);
      };
    }
  }, [imageSrc, hideImage]);

  return (
    <div className="card" style={{ width: '18rem' }}>
      {!hideImage && (
        imgSrc ? (
          <img src={imgSrc} className="card-img-top" alt="Card image cap" />
        ) : (
          <div className="card-img-top" style={{ height: '180px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {imgError ? 'Image not found' : 'Image cap'}
          </div>
        )
      )}

      <div className="card-body">
        <h5 className={`card-title ${specialTitle ? 'text-primary' : ''}`}>{title}</h5>
        <p className="card-text">{text}</p>
        {children}
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}
