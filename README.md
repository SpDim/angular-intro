# CF - Introduction to Angular Framework

## 12/10/2023

- Simple binding (Απλή δέσμευση χαρακτηριστικού της κλάσης του component στο template του component)
- Use of placeholder `{{<attribute_name>}}`

## 2. Component input

Created interface for data of **type Person**

```
ng generate interface interfaces/person --dry-run
CREATE src/app/interfaces/person.ts (28 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

## 3. Alternate component input

- input | undefined
- \*ngIf για εμφάνιση υπό συνθήκη στο template
- ng-container & ng-template

## 4. *ngFor Directive 

## 5. Event Binding (template -> controller and controller -> template)

- Click handlers
- Input handlers
- Two way binding