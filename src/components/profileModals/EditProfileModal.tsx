import React, { useState } from 'react';
import Modal from '../Modal';
import ProfileImg from '../../assets/ProfilePhoto.svg';
import { ModalProps } from '../../constants/constants';

interface FormData {
  name: string;
  skills: string[];
  about: string;
  location: string;
  languages: string[];
  links: string[];
  [key: string]: string | string[]; // Index signature
}
const EditProfileModal: React.FC<ModalProps> = (props) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    skills: [],
    about: '',
    location: '',
    languages: [],
    links: [],
  });

  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newLink, setNewLink] = useState('');

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const isAnyFieldFilled = () => {
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        if (formData[key].length > 0) {
          return true;
        }
      } else {
        if (formData[key]) {
          return true;
        }
      }
    }
    return false;
  };

  const addNewValue = (field: keyof FormData, newValue: string) => {
    if (newValue.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        [field]: [...prevData[field], newValue],
      }));
    }
  };

  const removeValue = (field: keyof FormData, index: number) => {
    if (Array.isArray(formData[field])) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: (prevData[field] as string[]).filter((_, i) => i !== index),
      }));
    }
  };

  const handleConfirmClick = () => {
    // Here you can send formData to your API
    console.log('Sending data to API:', formData);
  };

  return (
    <Modal {...props}>
      <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <h3 className="text-lg font-semibold text-gray-900">Edit Profile</h3>
        <div className="flex justify-between">
          <img src={ProfileImg} alt="Profile_photo" className="w-[6rem] h-[6rem]" />
          <button className="text-sm text-gray-500 border border-gray-400 h-[3rem] px-10 rounded-full mt-5 mr-3">
            Change profile photo
          </button>
        </div>
        <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="p-4 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">Skills or Tools</label>
        <div className="flex flex-wrap gap-3">
          {Array.isArray(formData.skills) &&
            formData.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 mr-2">
                {skill}
                <button className="ml-2" onClick={() => removeValue('skills', index)}>
                  &#10005;
                </button>
              </span>
            ))}
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addNewValue('skills', newSkill);
                setNewSkill('');
              }
            }}
            className="p-4 mt-2 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none"
          />
        </div>

        <label className="leading-8 text-gray-500 text-sm font-medium ">About</label>
        <textarea
          value={formData.about}
          onChange={(e) => handleInputChange('about', e.target.value)}
          className="p-4 pl-6 w-full h-44 text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="p-4 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">Languages</label>
        <div className="flex flex-wrap gap-3">
          {Array.isArray(formData.languages) &&
            formData.languages.map((language, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 mr-2">
                {language}
                <button className="ml-2" onClick={() => removeValue('languages', index)}>
                  &#10005;
                </button>
              </span>
            ))}
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addNewValue('languages', newLanguage);
                setNewLanguage('');
              }
            }}
            className="p-4 mt-2 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none"
          />
        </div>
        <label className="leading-8 text-gray-500 text-sm font-medium ">Links</label>
        <div className="flex flex-wrap gap-3">
          {Array.isArray(formData.links) &&
            formData.links.map((link, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 mr-2">
                {link}
                <button className="ml-2" onClick={() => removeValue('links', index)}>
                  &#10005;
                </button>
              </span>
            ))}
          <input
            type="text"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addNewValue('links', newLink);
                setNewLink('');
              }
            }}
            className="p-4 mt-2 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none"
          />
        </div>

        <div className="flex justify-end">
          <button
            className={`px-6 py-2 bg-blue-600 text-white rounded-md ${
              isAnyFieldFilled() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            disabled={!isAnyFieldFilled()}
            onClick={handleConfirmClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
