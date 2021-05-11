---
title: Guidelines
---

## Design & Frontend Development Guidelines

### **Principles**

- **Usability**: Design decisions and implementation should always favour delivering the solution that lets the end-user use Chatwoot most effectively, efficiently and satisfactorily.
- **Standardisation**: The design and coding decisions we take at Chatwoot concur to industry standards as well as an established organisation standard. This helps us with our public contributors, onboarding new team members and existing teammates to progress in their careers.
- ** Productivity**: Our processes should focus on improving productivity for all the stakeholders. While designing, this means reduced decision fatigue and a defined set of constraints for the team members. The designs developed by the design team should be easily translatable to code. The end products we deliver should always be optimised to improve Productivity
- ** Iteration**: Constant iteration over our decision frameworks and implementations to ensure that we concur to the stated principles and continue improving and growing as a team.

### **Design Process**

At Chatwoot, we follow a 12 column grid layout for the designs. The design team will develop designs for each device category ( web/tablet/mobile) and pass them to the development team.

#### **Advantages**

- Sticking to the standard grid helps us to work under guidelines.
- Established framework for the thought process.
- Standardisation across the organization for design decisions.
- Easier onboarding for newer team members / public contributors.
- Easier translation of the design to code.

### **Coding Guidelines**

The development team will work with the design team to understand the motivation behind the choices, brainstorm edge cases and start working on the implementation. Since the designs are based on the standard grid, translating the design to code should be relatively more straightforward by using the front-end framework's helper classes. 

If the design is not implemented using helper classes, it should be done by defining utility classes. Otherwise scope the related styles in the Vue components itself.

#### **Writing CSS**

CSS is awesome, but maintaining CSS is hard!!!

We try to be judicious about writing custom CSS. It is hard to identify and remove dead CSS code. While writing custom CSS, one should work with the awareness of that responsibility.

- At all times possible, abstract common styles to utility classes and avoid rewriting CSS for which utility classes are already available.
- Isolate component-specific CSS within the components.
- When there are cases where you have to write specific CSS, discuss the possibility of converting them into utility classes.

#### **Complex Layouts**

There are cases when a complex layout designed based on the grid might not translate well with varied display sizes under a specific device category. In such cases, we will work on reinforcements over the original grid-based design.

- The design process starts with grid helpers classes, over which reinforcements are applied based on the design review.
- For three-column layout with varying widths for at specific break-points, use the SCSS mixin available.
- We can rethink whether the layout should change further accordingly to the varying display sizes. Example: converting linear buttons into stacked once when available size reduces.
- Write additional reinforcement CSS like min-width after discussing with the team.
- If the grid-based design works well for almost 95% of cases and the breakage is for minor edge cases, we will compromise it in favour of code maintainability.

### **Final Review**

The development team will work with the design team for the final approval of the design. This process is when the completed work is comparable with the original design. The designer can suggest additional changes over the work if it doesn’t confer to the original design. The teams iterate over this process until the final go-ahead is received from the design team.

### **Ownership of Decision Making**

At times the development team might find difficulties in implementing the designs proposed by the design team. This might include but not limited to going against development best practices, making compromises in code quality etc. 

In such cases, the development team can discuss the issues with the design team and try to convince them of the caveats. The ownership of this decision making and the visual aspect of the application falls upon the design team. If the design team isn’t convinced of the caveats, the development team will have to compromise and develop an implementation plan outside the existing guidelines.
