import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { ISession } from "../index";

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    newSessionForm: FormGroup
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('',
            [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session)
        this.saveNewSession.emit(session)
    }
    cancel() {
        this.cancelAddSession.emit()
    }

    private restrictedWords(words) {
        return (control: FormControl): { [key: string]: any } => {
            if (!words) return null
            console.log('ajunge aici')
            var invalidWords = words.map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null)
            return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(',') }
                : null
        }
    }
}