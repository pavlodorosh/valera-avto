<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('part', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 150);
            $table->string('adminText', 150);
            $table->text('description');
            $table->integer('markaId');
            $table->integer('modelId');
            $table->integer('price');
            $table->enum('hot', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('sold', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('active', ['0', '1'])->default('0')->nullable($value = false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('part');
    }
}
