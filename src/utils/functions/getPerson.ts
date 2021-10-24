import { PersonType } from "utils/typings";

const getPerson = (personId: string, people: PersonType[]) => {
  return people.find((person) => person.personId === personId);
};

export default getPerson;
