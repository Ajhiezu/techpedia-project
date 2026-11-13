<?php
require __DIR__.'/../../backend/vendor/autoload.php';
$app=require __DIR__.'/../../backend/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
if (realpath(storage_path())!==realpath(getenv('LARAVEL_STORAGE_PATH'))) throw new RuntimeException('QA storage isolation is not active.');
$database=config('database.connections.sqlite.database');
$qaRoot=realpath(__DIR__.'/../../.qa');
if (!app()->environment('qa') || !$qaRoot || !str_starts_with(realpath(dirname($database)),$qaRoot.DIRECTORY_SEPARATOR)) throw new RuntimeException('Refusing seed outside isolated QA database.');
$admin=new App\Models\User();$admin->name='QA Admin';$admin->email='qa-admin@example.test';$admin->password=Illuminate\Support\Facades\Hash::make(getenv('QA_ADMIN_PASSWORD'));$admin->is_admin=true;$admin->save();
$project=App\Models\Project::create(['title'=>'QA project','slug'=>'qa-project','status'=>'published','published_at'=>now(),'overview'=>'QA project overview']);
$tag=App\Models\Tag::create(['name'=>'QA Tag','slug'=>'qa-tag']);
for($i=0;$i<21;$i++){$post=App\Models\Post::create(['title'=>'QA Article '.$i,'slug'=>'article-'.$i,'author_id'=>$admin->id,'content'=>str_repeat('QA article body. ',1000),'status'=>'published','published_at'=>now(),'excerpt'=>'QA article preview']);$post->tags()->attach($tag->id);}
App\Models\Faq::create(['question'=>'How do we begin?','answer'=>'Start with project goals.','is_active'=>true]);
echo "Isolated QA fixtures seeded.\n";
