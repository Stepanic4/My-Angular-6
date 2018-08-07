import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    name: string = '';
    age: number;
    found: boolean;

    constructor(private httpClient: HttpClient) {
    }

    onNameKeyUp(event: any) {
        this.name = event.target.value;
        this.found = false;
    }

    getProfile() {
        this.httpClient.get('http://192.168.1.188:8080/api/qualifiers/list')
            .subscribe(
                (data: any[]) => {
                    if (data.length) {
                        this.age = data[0].age;
                        this.found = true;
                    }
                    if (data.length) {
                        console.log('DON`T WORK');
                    }
                }
            );
    }

    postProfile() {
        this.httpClient.post('http://192.168.1.188:8080/api/qualifiers/upload_model',
            {
                last: true,
                list: [
                    {
                        'id': 1,
                        'title': 'SUMMER THE DUBAI FITNESS CHAMPIONSHIP',
                        'description_title': 'WHAT 92S THE DUBAI FITNESS CHAMPIONSHIP?',
                        'description': 'Created in 2012 to raise awareness',
                        'cover_image_url': 'https://encrypted-tbn0.gstatic.com/imagesYmlG1KWE604m6ji9eLU',
                        'target_url': 'http://www.dxbfitnesschampionship.com/',
                        'target_action_title': 'Link to url 1',
                        'date_from': '01-06-2018 00:00:00',
                        'date_to': '31-08-2018 00:00:00',
                        'events': [
                            {
                                'id': 1,
                                'title': 'Event 1999',
                                'description': 'Some event With text',
                                'video_id': 'HCjNJDNzw8Y',
                                'date_from': '15-06-2018 00:00:00',
                                'date_to': '15-07-2018 00:00:00',
                                'workout_settings': {
                                    'count_type': 'REPS',
                                    'timer': {
                                        'timer_type': 'TIMER_STOPWATCH',
                                        'round_duration': 0,
                                        'rest_duration': 0,
                                        'total_rounds': 0,
                                        'initial_count_down': 5,
                                        'count_up': false,
                                        'time_camp': 180
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        )
            .subscribe(
                (data: any) => {
                    console.log(data);
                }
            );
    }

    ngOnInit() {
    }

    onSubmit() {
        // alert(JSON.stringify(this.model));
    }

}
