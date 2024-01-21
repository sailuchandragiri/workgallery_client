import React, { useReducer, FormEvent, ReactNode } from 'react';
import Modal from '../Modal';
import ImageUpload from '../../assets/ImageUpload.svg';

import 'tailwindcss/tailwind.css';

// Action types
const SET_FIELD = 'SET_FIELD';
const RESET_FORM = 'RESET_FORM';

interface SetFieldAction {
  type: typeof SET_FIELD;
  field: string;
  value: string | File | null;
}

interface ResetFormAction {
  type: typeof RESET_FORM;
  initialState: FormData;
}

type FormAction = SetFieldAction | ResetFormAction;

// State interface
interface FormData {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  about: string;
  image: File | null;
  college?: string;
  degree?: string;
  fieldOfStudy?: string;
  grade?: string;
  skills?: string;
  name: string;
  from: string;
  acheivedOn: string;
  description: string;
  certificateName: string;
  receivedFrom: string;
  issuedOn: string;
  subTitle: string;
  date: string;
}

// Reducer function
const formReducer = (state: FormData, action: FormAction): FormData => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    case RESET_FORM:
      return action.initialState;
    default:
      return state;
  }
};

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
  isMenu: boolean;
  tab: string;
}

const EditModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  isGroup,
  isWidth,
  isMobile,
  isMenu,
  tab,
}) => {
  const initialState: FormData = {
    title: '',
    companyName: '',
    startDate: '',
    endDate: '',
    about: '',
    image: null,
    name: '',
    from: '',
    acheivedOn: '',
    description: '',
    certificateName: '',
    receivedFrom: '',
    issuedOn: '',
    subTitle: '',
    date: '',
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field: string, value: string | File | null) => {
    dispatch({
      type: SET_FIELD,
      field,
      value,
    });
  };

  console.log(formData.image?.name, "image");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint to handle the data
      //   const response = await axios.post(`/api/${modalKey}-endpoint`, formData);
      //   console.log(response.data); // Handle success
      //   dispatch({ type: RESET_FORM, initialState });
      //   closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error
    }
  };

  //   const [inputValue, setInputValue] = useState('');

  //   const [selectedDate, setSelectedDate] = useState<string>(''); // You can use any type suitable for your needs

  //   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSelectedDate(event.target.value);
  //   };

  //   const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
  //     setInputValue(e.target.value);
  //   };

  //   const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Function to handle file selection
  //   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0] || null;
  //     setSelectedFile(file);
  //   };

  //   // Function to handle file upload
  //   const handleUpload = () => {
  //     if (selectedFile) {
  //       // Perform upload logic here
  //       console.log('Uploading file:', selectedFile);
  //     }
  //   };

  const renderFormFields = (): ReactNode => {
    switch (tab) {
      case 'Experience':
        return (
          <>
            <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Company Name</label>
            <input
              type="text"
              value={formData.companyName || ''}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Start Date</label>
            <input
              type="date"
              value={formData.startDate || ''}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">End Date</label>
            <input
              type="date"
              value={formData.endDate || ''}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">About</label>
            <textarea
              value={formData.about || ''}
              onChange={(e) => handleInputChange('about', e.target.value)}
              className="p-4 pl-6 w-full h-24 text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
          </>
        );
      case 'Education':
        return (
          <>
            <label className="leading-8 text-gray-500 text-sm font-medium mt-2">
              College/University
            </label>
            <input
              type="text"
              value={formData.college || ''}
              onChange={(e) => handleInputChange('college', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Degree</label>
            <input
              type="text"
              value={formData.degree || ''}
              onChange={(e) => handleInputChange('degree', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Field of study</label>
            <input
              type="text"
              value={formData.fieldOfStudy || ''}
              onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Start Date</label>
            <input
              type="date"
              value={formData.startDate || ''}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">
              End date (or expected)
            </label>
            <input
              type="date"
              value={formData.endDate || ''}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Grade</label>
            <input
              type="text"
              value={formData.grade || ''}
              onChange={(e) => handleInputChange('grade', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Skills</label>
            <input
              type="text"
              value={formData.skills || ''}
              onChange={(e) => handleInputChange('skills', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
          </>
        );
      case 'Certificates':
        return (
          <>
            <label className="leading-8 text-gray-500 text-sm font-medium mt-2">
              Certificate name
            </label>
            <input
              type="text"
              value={formData.certificateName || ''}
              onChange={(e) => handleInputChange('certificateName', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">
              Received from ( source of the certificate )
            </label>
            <input
              type="text"
              value={formData.receivedFrom || ''}
              onChange={(e) => handleInputChange('receivedFrom', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Issued on</label>
            <input
              type="date"
              value={formData.issuedOn || ''}
              onChange={(e) => handleInputChange('issuedOn', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
          </>
        );
      case 'Achievement':
        return (
          <>
            <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Name</label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">From</label>
            <input
              type="text"
              value={formData.from || ''}
              onChange={(e) => handleInputChange('from', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Achieved on</label>
            <input
              type="date"
              value={formData.acheivedOn || ''}
              onChange={(e) => handleInputChange('acheivedOn', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="p-4 pl-6 w-full h-24 text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
          </>
        );
      case 'Extras':
        return (
          <>
            <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Sub Title</label>
            <input
              type="text"
              value={formData.subTitle || ''}
              onChange={(e) => handleInputChange('subTitle', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Date</label>
            <input
              type="date"
              value={formData.date || ''}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="p-4 pl-6 w-full text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
            <label className="leading-8 text-gray-500 text-sm font-medium ">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="p-4 pl-6 w-full h-24 text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-xl focus:outline-none "
              placeholder=""
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      status={groupModalStatus}
      onButtonClick={onChildButtonClick}
      isGroup={isGroup}
      isWidth={isWidth}
      isMobile={isMobile}
      isMenu={isMenu}
    >
      <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <h3 className="text-lg font-semibold text-gray-900">Add {tab}</h3>
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          {formData.image && <p className="mt-4 text-blue-600">{formData.image.name}</p>}
          <div className="flex items-center justify-center mt-3">
            <label className="w-[100%] flex justify-center relative cursor-pointer border-dotted border-2 px-4 py-5 bg-neutral-100 rounded-xl">
              <img src={ImageUpload} alt="Image_Upload" />
              <span className="ml-2 text-gray-500">Upload media</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleInputChange('image', e.target.files?.[0])}
              />
              <div
                className="absolute top-0 left-0 right-0 bottom-0 opacity-0"
                // onClick={handleUpload}
              ></div>
            </label>
          </div>

          {/* Common Image Input */}
          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange('image', e.target.files?.[0])}
          /> */}

          {/* <button type="submit">Submit</button> */}

          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className={` px-6 py-2 bg-blue-600 text-white rounded-md ${
                formData.title ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!formData.title}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
