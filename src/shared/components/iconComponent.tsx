import {
  BriefcaseIcon,
  CakeIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const defaultCss = "size-6 bg-black text-white p-1 rounded-md";

export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <InformationCircleIcon className={!className ? defaultCss : className} />
);

export const ExpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <BriefcaseIcon className={!className ? defaultCss : className} />
);

export const SkillIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SparklesIcon className={!className ? defaultCss : className} />
);

export const PrjIcon: React.FC<{ className?: string }> = ({ className }) => (
  <CodeBracketIcon className={!className ? defaultCss : className} />
);

export const BornIcon: React.FC<{ className?: string }> = ({ className }) => (
  <CakeIcon className={!className ? defaultCss : className} />
);

export const AddressIcon: React.FC<{ className?: string }> = ({
  className,
}) => <MapPinIcon className={!className ? defaultCss : className} />;

export const PhoneNumberIcon: React.FC<{ className?: string }> = ({
  className,
}) => <PhoneIcon className={!className ? defaultCss : className} />;

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <EnvelopeIcon className={!className ? defaultCss : className} />
);

export const EduIcon: React.FC<{ className?: string }> = ({ className }) => (
  <AcademicCapIcon className={!className ? defaultCss : className} />
);
