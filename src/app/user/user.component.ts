import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Params,Router} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!: {id:string, name:string}
// Activated router give inforrmation of current infotmarion

constructor(private route:ActivatedRoute ,
 private  router :Router) {

}
// Here NgOnit is not loading so how  to overcomeon this  problem (solution is by listening the url changes on reload)

ngOnInit() {
  // How can we get data of id and name of router in user component here
this.user = {
  id:this.route.snapshot.params['id'],
// If you intend not to update your URL parameter within the same component you are accessing it, then you can use the snapshot

  name: this.route.snapshot.params['name'],
};
// this will detect the url changes(listen the dynamic data)

this.route.params.subscribe((data:Params) =>{
  // Subscribe is RxJs (a third party tool) 3rd party tool handles all type of  asynch data
this.user = {
  id: data['id'],
  name: data[ 'name'],
}
});




this.route.params.subscribe((data:Params) =>{
  this.user = {
    id:data['id'],
    name: data['name'],
  };
});



this.route.queryParams.subscribe(data =>{
  console.log(data);
})
this.route.fragment.subscribe(data =>{
  console.log(data);
})
console.log(this.route.snapshot.queryParams);
console.log(this.route.snapshot.fragment);

}
getMohsinDetails ( ) {
  this.router.navigate(['/users',424,'Mohsin'],{
    queryParams:{page:1, search:'Mohsin'},
    fragment: 'loading',
  });
}
}

