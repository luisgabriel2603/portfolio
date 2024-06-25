import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}


export const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
export function getElementForScroll(link) {

  const element = document.querySelector(`a[href="#${link}"]`);
  element.addEventListener('click', (event) => scrollToSection(event, link));

  return () => {
    element.removeEventListener('click', (event) => scrollToSection(event, link));
  };
}