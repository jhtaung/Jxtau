import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Member } from 'src/app/models/member';
import { AccountService } from 'src/app/services/account.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  member!: Member;
  form!: FormGroup;
  config = {
    editable: true,
    spellcheck: true,
    minHeight: '100px',
  };

  constructor(
    private memberService: MemberService,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.form = this.formBuilder.group({
      username: [{ value: '', disabled: true }, [Validators.required]],
      created: [{ value: '', disabled: true }],
      lastActive: [{ value: '', disabled: true }],
      photoUrl: [{ value: '', disabled: true }],
      dateOfBirth: [{ value: '', disabled: true }],
      knownAs: [],
      introduction: [],
    });

    this.accountService.currentUser$.subscribe({
      next: user => {
        if (!user) return;

        this.memberService.getMember(user.username).subscribe({
          next: member => {
            console.log(member);
            this.member = member;
            this.form.setValue({
              username: member.username,
              created: member.created,
              lastActive: member.lastActive,
              photoUrl: member.photoUrl,
              dateOfBirth: member.dateOfBirth,
              knownAs: member.knownAs,
              introduction: member.introduction,
            });
          },
          error: error => {
            console.log(error);
          },
        });
      },
      error: error => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  update() {
    if (this.form.invalid) return;
    this.member.knownAs = this.form.value.knownAs;
    this.member.introduction = this.form.value.introduction;
    this.memberService.updateMember(this.member).subscribe({
      next: response => {
        console.log('update success!', response);
        this.snackBar.open('success!', 'x', {
          duration: 3000,
          panelClass: ['jh-snackbar-green'],
        });
      },
      error: error => {
        console.log('update failed!', error);
        this.snackBar.open('error!', 'x', {
          duration: 3000,
          panelClass: ['jh-snackbar-red'],
        });
      },
      complete: () => {},
    });
  }
}
