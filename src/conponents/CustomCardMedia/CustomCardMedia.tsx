import React from 'react'

import DefaultLogoIcon from '../../assets/icons/icons'

interface IProps {
  src?: string
  width?: number
  height?: number
  alt?: string
  border?: string
  padding?: string
}

const CustomCardMedia: React.FC<IProps> = ({
  src,
  width,
  height,
  alt,
  border,
  padding,
}) => {
  if (!src)
    return (
      <DefaultLogoIcon
        className={
          'border border-gray-100 border-solid rounded-8 box-border object-contain '
        }
        style={{ width, height, border, padding }}
      />
    )

  return (
    <img
      src={src}
      style={{
        width,
        height,
        borderRadius: 24,
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      alt={alt}
    />
  )
}

export default CustomCardMedia
