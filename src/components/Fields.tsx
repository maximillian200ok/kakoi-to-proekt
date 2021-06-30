import { FC } from 'react';
import { Field } from './Field';

export const Fields: FC = () => {
  const fieldsElements = [
    'apple',
    'stub',
    'apple',
    'apple',
    'apple',
    10000,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    5000,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    3000,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    2000,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    1500,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    1000,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    800,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    500,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    400,
    'apple',
    'apple',
    'apple',
    'apple',
    'apple',
    300,
  ];

  const isApple = (field: string | number) => {
    if (field === 'apple') {
      return true;
    }

    return false;
  };

  const isStub = (field: string | number) => {
    if (field === 'stub') {
      return true;
    }

    return false;
  };

  return (
    <div className="apple-fortune__fields">
      {fieldsElements.map((field, index) => {
        return (
          <Field
            className={
              isApple(field)
                ? 'apple-fortune__fields--apple'
                : isStub(field)
                ? 'apple-fortune__fields--stub'
                : ''
            }
            key={index}
          >
            {isNaN(Number(field)) ? (
              <img
                src={
                  isApple(field)
                    ? '/images/field-icons/apple.png'
                    : '/images/field-icons/stub.png'
                }
                alt=""
              ></img>
            ) : (
              field
            )}
          </Field>
        );
      })}
    </div>
  );
};
