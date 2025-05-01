import React, { JSX, ReactNode, useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';

type CarouselProps = {
  children: ReactNode[];
  width?: string;
  height?: string;
};

function Carousel(props: CarouselProps): JSX.Element {
  const { children, width = '100%', height = '500px' } = props;
  const [index, setIndex] = useState<number>(0);
  const maxIndex = children.length - 1;

  const goNext = (): void => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const goBack = (): void => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goBack,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={carouselContainerStyle(width, height)}>
      {index > 0 && (
        <button
          onClick={goBack}
          style={{ position: 'absolute', left: '20px', zIndex: 1 }}
        >
          &lt;
        </button>
      )}
  
      <div style={carouselTrackStyle(index)}>
        {children.map((child, i) => (
          <div key={i} style={slideStyle}>
            {child}
          </div>
        ))}
      </div>
  
      {index < maxIndex && (
        <button
          onClick={goNext}
          style={{ position: 'absolute', right: '20px', zIndex: 1 }}
        >
          &gt;
        </button>
      )}
    </div>
  );
}

const carouselContainerStyle = (width: string, height: string): React.CSSProperties => ({
  width,
  height,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const carouselTrackStyle = (index: number): React.CSSProperties => ({
  display: 'flex',
  transform: `translateX(-${index * 100}%)`,
  transition: 'transform 0.35s ease-in-out',
  width: '100%',
  alignItems: 'center',
});

const slideStyle: React.CSSProperties = {
  minWidth: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Carousel;