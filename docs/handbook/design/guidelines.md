---
title: Guidelines
---

## Design & Frontend Development Guidelines

### **Principles**

- **Usability** : Design decisions and implementation should always favour in delivering the solution that lets the end user use Chatwoot most effectively, efficiently and satisfactorily.
- **Standardisation** : The design and coding decisions we take at chatwoot concur to industry standards as well as an established organisation standard. This helps us with our public contributors, onboarding new team members and existing team mates to progress in their careers.
- **Productivity** : Our processes should be geared towards improving productivity for all the stakeholders. While designing, this means reduced decision fatigue and defined set of constraints for the team members to work with. The designs developed by the design team should be easily translatable to code. The end products we deliver should always be optimised to improve productivity
- **Iteration**: Constant iteration over our decision frameworks and implementations to ensure that we concur to the stated principals as well as we continue to improve and grow as a team.

### **Design Process**

In Chatwoot we try design adhered to a 12/ column grids established upfront. The Design team will come up with designs for each of the device categories defined ( web, tablet, mobile) and pass it to the development team to work on.

#### **Advantages**

- Sticking with the standard grid helps us to work under guidelines
- Established framework for thought process
- Standardisation across the org for design decisions
- Easier onboarding for newer members.
- Easier translation of design to code.

### **Coding Guidelines**

The development team will work with the design team to understand the motivation behind the choices, brainstorm edge cases and start working on the design. Since the designs are based off the standard grid, translating the design to code should be relatively easier by using the helper classes provided by the front end framework. Chatwoot specific design changes outside the framework helper classes should be done by defining utility classes or should be contained into the component CSS.

#### **Writing CSS**

CSS is awesome, But maintaining CSS is hard !!!

So we try to be super judicious about writing CSS. It's super hard to identify and remove dead CSS code. So when writing CSS one should work with awareness of that responsibility.

- At all times possible, abstract common styles to utility classes and avoid rewriting CSS for which utility classes are already available.
- Isolate Component specific CSS to within the components.
- When there are cases where you have to write specific css, discuss with the team about the possibility for converting it into utility classes

#### **Complex Layouts**

There are cases when a complex layout designed based on the grid might not translate well with varied display sizes under a specific device category. In such cases we will work on reinforcements over the original grid based design.

- The design process starts with grid helpers classes, over which reinforcements are applied based on the design review.
- For three column layout with varying widths for at specific break-points, Use the mixin
- We can rethink whether the layout should change further accordingly to the varying display sizes. example : converting linear buttons into stacked once when available size reduces.
- Write additional reinforcement CSS like min-width after discussing with the team.
- If the grid based design works well for almost 95% cases and the breakage is for minor edge cases, we will do a compromise on it in favour of code maintainability.

### **Final Review**

The development team will work with the design team for a final approval of the design. This is when the completed work is compared with the original design. The designer can suggest additional changes over the work if it doesn’t confer to original design. The teams iterate over this process, until the final go ahead is received from the design Team.

### **Ownership of Decision Making**

At times the development team might find difficulties in implementing the designs proposed by the design team. This might include but not limited to going against development best practices, making compromises in code quality etc.  In such cases the development team can discuss the issues with the design team and try to convince them of the caveats. But the ownership of this decision making and the visual aspect of the application falls up on the design team. If the design team isn’t convinced of the caveats, the development team will have to compromise and come up with an implementation plan outside the existing guidelines.