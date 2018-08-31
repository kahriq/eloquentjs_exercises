//ITERABLE GROUPS

/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.members = [];
  }

  add(val) {
    if (!this.has(val)) this.members.push(val);
  }

  delete(val) {
    this.members = this.members.filter(g => g !== val);
  }

  has(val) {
    return this.members.some(g => g === val);
  }

  static from(obj) {
    let group = new Group();
    for (let item of obj) {
      group.add(item);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.current = 0;
    this.group = group;
  }

  next() {
    if (this.current >= this.group.members.length) return { done: true };

    let value = this.group.members[this.current];

    this.current++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
