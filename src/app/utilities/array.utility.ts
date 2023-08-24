export function arrayWithFirstLetter<T extends NamedEntity>(arr: T[]): T[] {
    return arr.map((option) => {
      const firstLetter = option.name[0]?.toUpperCase();
      return {
        firstLetter,
        ...option,
      };
    });
  }

  export function employeesFirstLetter(arr: Array<Employee>): Array<Employee> {
    return arr.map((option) => {
      const firstLetter = option.firstName[0]?.toUpperCase();
      return {
        ...option,

        firstLetter
      };
    })
  }