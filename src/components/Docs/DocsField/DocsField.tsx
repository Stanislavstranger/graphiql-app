/* eslint-disable no-unused-vars */
import TypeIcon from '@/components/UI/TypeIcon/TypeIcon';
import { __Field, __Type } from '@/interfaces/schemaInterface';
import useTranslation from '@/localization/useTranslation';
import getTypeName from '@/utils/graphQL_API/getTypeName';
import { FC } from 'react';
import ArgumentsIcon from '@/components/UI/ArgumentsIcon/ArgumentsIcon';

type DocsFieldType = {
  field: __Field;
  handleClickValue: (value: __Type) => void;
};

const DocsField: FC<DocsFieldType> = ({ field, handleClickValue }) => {
  const t = useTranslation();

  const { typeName } = getTypeName(field.type);
  return (
    <div>
      <p>{field.description}</p>
      <div>
        <div>
          <p>
            <TypeIcon />
            <b>{t['Type']}</b>
          </p>
          <p className="property_name docs_link" onClick={() => handleClickValue(field.type)}>
            {typeName}
          </p>
        </div>
        {field.args.length > 0 && (
          <div>
            <ArgumentsIcon />
            <b>{t['Arguments']}</b>
            {field.args.map((arg) => {
              const { typeName } = getTypeName(arg.type);
              return (
                <div key={arg.name}>
                  <span style={{ color: '#9DC69D' }}>{arg.name}: </span>
                  <span
                    className="property_name docs_link"
                    onClick={() => handleClickValue(arg.type)}
                  >
                    {typeName}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsField;
