import { classNamesCustom } from "@/utils/classes";
import { FC } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

type Props = {
  pass: string;
  confirm_pass: string;
};

const PasswordFeedback: FC<Props> = (props) => {
  return (
    <div className="px-4">
      <ul>
        <li
          className={classNamesCustom(
            "text-gray-500 flex items-center space-x-2",
            {
              "text-green-700": props.pass.length >= 8,
            }
          )}
        >
          {props.pass.length < 8 ? <FaTimes /> : <FaCheck />}
          <span>La contraseña debe tener al menos 8 caracteres</span>
        </li>
        <li
          className={classNamesCustom(
            "text-gray-500 flex items-center space-x-2",
            {
              "text-green-700":
                props.pass == props.confirm_pass && props.pass != "",
            }
          )}
        >
          {props.pass != props.confirm_pass || props.pass == "" ? (
            <FaTimes />
          ) : (
            <FaCheck />
          )}
          <span>Las contraseñas deben coincidir</span>
        </li>
      </ul>
    </div>
  );
};

export default PasswordFeedback;
